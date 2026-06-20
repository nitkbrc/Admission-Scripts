function sendEmailFromSheetA() {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test");
  var data = sheet.getDataRange().getValues();

  var subject = "[CSE, NITK, Surathkal] M. Tech (SF) Admission-26: Guidelines";

  // Start from Row 6
  for (var i = 5; i < data.length; i++) {

    var name = data[i][1];     // Column B
    var ref_no = data[i][2];   // Column C
    var email = data[i][3];    // Column D
    var room = data[i][4];     // Column E
    var status = data[i][5];   // Column F

    if (email != "" && status != "Sent") {

      var body =
        "Dear <b>" + name + "</b>,<br><br>" +

        "<b>Your Application (Ref.) No.:</b> " + ref_no + "<br><br>" +

        "<b>A. Written Test Guidelines:</b><br>" +
        "1. Computer-Based Test (CBT) - Offline.<br>" +
        "2. Your application portal (<a href='https://iris.nitk.ac.in/admission/application/login'>Click Here</a>) credentials (Login ID & Password) are essential.<br>" +
        "3. A call letter with an authorised Photo ID proof is compulsory.<br>" +
        "4. Reporting time: 22.06.2026 (Monday), 08:30 AM.<br>" +
        "5. Mock Test: 22.06.2026 (Monday), 09:00 AM.<br>" +
        "6. Written Test: 22.06.2026 (Monday), 09:30 AM - 10:30 AM.<br>" +
        "7. Syllabus: <a href='https://www.nitk.ac.in/document/attachments/9774/CSE-MTech_SS-26-Call_Letter-Website-11.06.26.pdf'>Click Here</a><br>" +
        "<b>8. Written Test Venue:</b> " + room + ".<br><br>" +

        "<b>B. Programming Test Guidelines</b> (<span style='color:blue'>Only for the candidates <b>shortlisted after the Written Test.</b></span>):<br>" +
        "1. Computer-Based Test (CBT) - Offline.<br>" +
        "2. Programming Environment: Operating System - Ubuntu; Programming Language: C.<br>" +
        "3. A call letter with an authorised Photo ID proof is compulsory.<br>" +
        "4. Reporting Time: 22.06.2026 (Monday), 12:00 PM.<br>" +
        "5. Programming Test: 22.06.2026 (Monday), 12:30 PM - 01:30 PM.<br>" +
        "<b>6. Programming Test Venue:</b> CSE Dept. Lab No. 407 (Ground Floor).<br><br>" +

        "<b>Note:</b> No mobile phones, calculators, or electronic gadgets are permitted inside the examination hall.<br><br>" +

        "<b>C. Document Verification Guidelines</b> (<span style='color:blue'>Only for the candidates <b>shortlisted after the Programming Test</b></span>):<br>" +
        "1. Reporting Time: 23.06.2026 (Tuesday), 08:30 AM.<br>" +
        "2. Original documents to be produced along with one set of self-attested photocopies: <a href='https://www.nitk.ac.in/document/attachments/9590/Information_Bulletin_Self_finance_PG_courses_2026.pdf'>Click Here</a> (Page No. 9)<br>" +
        "<b>3. Venue:</b> CSE Dept. Lab No. 401 (Ground Floor).<br><br>" +

        "<b>D. Interview Guidelines</b> (<span style='color:blue'>Applicable only to candidates <b>shortlisted after the Programming Test and successful document verification</b></span>):<br>" +
        "1. Date & Time: 23.06.2026 (Tuesday), 09:30 AM.<br>" +
        "<b>2. Venue:</b> CSE Dept. Meeting Room (Ground Floor).<br><br>" +

        "<b>Best Wishes,</b><br>" +
        "Department of CSE<br>" +
        "NITK Surathkal";

      GmailApp.sendEmail(email, subject, "", {
        htmlBody: body
      });

      // Write Sent in Column F
      sheet.getRange(i + 1, 6).setValue("Sent");
    }
  }
}
