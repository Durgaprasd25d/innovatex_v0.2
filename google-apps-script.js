// This code goes in your Google Apps Script project
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Registrations') || ss.insertSheet('Registrations');
    
    // If this is the first entry, set up the headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Team Name',
        'Selected Track',
        'Member Count',
        'Member 1 Name',
        'Member 1 Email',
        'Member 1 Role',
        'Member 2 Name',
        'Member 2 Email',
        'Member 2 Role',
        'Member 3 Name',
        'Member 3 Email',
        'Member 3 Role',
        'Member 4 Name',
        'Member 4 Email',
        'Member 4 Role',
        'Member 5 Name',
        'Member 5 Email',
        'Member 5 Role',
        'Member 6 Name',
        'Member 6 Email',
        'Member 6 Role',
        'Member 7 Name',
        'Member 7 Email',
        'Member 7 Role',
        'Member 8 Name',
        'Member 8 Email',
        'Member 8 Role'
      ]);
    }
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      data.teamName,
      data.selectedTrack,
      data.teamMembers.length
    ];
    
    // Add member data (up to 8 members)
    for (let i = 0; i < 8; i++) {
      const member = data.teamMembers[i] || { name: '', email: '', role: '' };
      rowData.push(member.name, member.email, member.role);
    }
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Registration recorded successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}