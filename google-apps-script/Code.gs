// Eco Friends Solar Solution — enquiry form -> Google Sheet
// Paste this in: Google Sheet > Extensions > Apps Script

const OWNER_EMAIL = 'Ecofriendssolarsolution@gmail.com'; // notification goes here
const SHEET_NAME = 'Sheet1'; // change if your tab has a different name

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Honeypot: bots fill this hidden field, humans never see it
    if (data.website) return json({ ok: true });

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const row = [
      new Date(),
      clean(data.name),
      clean(data.pin),
      clean(data.email),
      clean(data.bill),
      clean(data.phone),
      clean(data.area),
    ];
    sheet.appendRow(row);

    // Email must never block the Sheet entry
    try {
      MailApp.sendEmail({
        to: OWNER_EMAIL,
        subject: 'New Solar Enquiry: ' + row[1],
        body:
          'Name: ' + row[1] + '\n' +
          'Pin Code: ' + row[2] + '\n' +
          'Email: ' + row[3] + '\n' +
          'Avg. Monthly Bill: ' + row[4] + '\n' +
          'Phone: ' + row[5] + '\n' +
          'Area (sq. ft.): ' + row[6],
      });
    } catch (mailErr) {
      console.error('Mail failed: ' + mailErr);
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Strip leading = + - @ so a cell can't be turned into a formula
function clean(v) {
  const s = String(v == null ? '' : v).trim().slice(0, 300);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
