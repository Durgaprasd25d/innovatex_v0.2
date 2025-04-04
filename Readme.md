# Registration Form with Google Sheets Integration

This project is a **React-based Registration Form** that submits user data (name and email) to a **Google Sheets backend** via **Google Apps Script**.

## 🚀 Features
- 🌟 **React Form** with Tailwind CSS and Framer Motion animations.
- 🔄 **Google Sheets Integration** using Google Apps Script (`code.gs`).
- 📡 **POST Request Handling** in `doPost()` method of Google Apps Script.
- ✅ **Success/Error Handling** with user feedback messages.
- 🔄 **Form Reset on Success** after submission.

## 📌 Technologies Used
- **React.js** (Next.js client component)
- **Google Apps Script** (Backend logic)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

---

## 🛠️ Setup & Deployment

### 1️⃣ Deploy Google Apps Script
1. Open [Google Apps Script](https://script.google.com/).
2. Create a new project and paste `code.gs`.
3. Save & **Deploy** as a Web App.
4. Set access to **Anyone with the link**.
5. Copy the **Deployment URL**.

### 2️⃣ Update React Code
- In `RegistrationForm.tsx`, update the API endpoint:
  ```tsx
  const url = "YOUR_DEPLOYED_SCRIPT_URL";
  ```

### 3️⃣ Run React Project
```bash
npm install
npm run dev
```

---

## 📝 Code Overview

### `code.gs` (Google Apps Script)
Handles `POST` requests from React and writes data to Google Sheets.

```javascript
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const scriptProp = PropertiesService.getScriptProperties();
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName('Sheet1');
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;
    const requestData = JSON.parse(e.postData.contents);
    const newRow = headers.map(header => requestData[header.toLowerCase()] || '');
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    return ContentService.createTextOutput(JSON.stringify({ result: "success" })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

### `RegistrationForm.tsx` (React Form)
Handles the user interface and form submission to Google Sheets.

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (result.result === "success") {
      setFormData({ name: "", email: "" });
      setSubmitStatus("success");
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    setSubmitStatus("error");
    setErrorMessage(error.message || "Submission failed. Try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 🎯 Future Improvements
- ✅ Add more form fields (phone, message, etc.).
- ✅ Implement reCAPTCHA for spam protection.
- ✅ Improve error handling with better logging.

## 📜 License
This project is open-source and available under the MIT License.


<!-- Prize will be update
Problem statement will be chnage
faculty corrdinator will add -->

---

Happy Coding! 🚀

