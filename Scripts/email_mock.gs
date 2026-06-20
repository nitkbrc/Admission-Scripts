function sendEmailFromSheetA() {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("WT-List-2");
  var data = sheet.getDataRange().getValues();

  var subject = "[CSE, NITK, Surathkal] M. Tech (SF) Admission-26: Mock Test";

  // Start from Row 6
  for (var i = 5; i < data.length; i++) {

    var name = data[i][1];     // Column B
    var ref_no = data[i][2];   // Column C
    var email = data[i][3];    // Column D
    var room = data[i][4];     // Column E
    var status = data[i][6];   // Column G

    if (email != "" && status != "Sent") {

      var body =
        "Dear <b>" + name + "</b>,<br><br>" +

        "<b>Your Application (Ref.) No.:</b> " + ref_no + "<br><br>" +

        "<b>Mock Test</b><br><br>" +

        "1. Login to application portal (<a href='https://iris.nitk.ac.in/admission/application/login'>Click Here</a>) <br>" +
        "2. After the successful login to your application portal, click Login to Moodle (left side) (<a href='https://drive.google.com/file/d/1PdF1no6_zBsflwihXYwbDM0b9typP-B9/view?usp=drive_link'>Snapshot</a>)<br>" +
        "3. Click M. Tech (Self-Finance) CSE Department 2026 (<a href='https://drive.google.com/file/d/1WPM3_sdq04SCTnjjUX7gkNko_3Z1Gp05/view?usp=drive_link'>Snapshot</a>). <br>" +
        "4. Click Mock Test - 1. <br>" +
        "5. Click Attempt quiz now, if you are within the test time limit or wait. <br>" +
        "6. Enter the test password <b>Mock1977@</b> to start the mock test (<a href='https://drive.google.com/file/d/1cDuMOEiiLw1vYPKJ__WsyLv_uPuSlMIl/view?usp=drive_link'>Snapshot</a>). <br><br>" +

        "<b>Note:</b><br>" +
        "1. A common test for M. Tech (CSE) and M. Tech (CSE-IS) <br>" +
        "2. Questions can be answered in any order. Correct answer: 1 mark and wrong answer: -0.25 mark. <br><br>" +

        "<b>Best Wishes,</b><br>" +
        "Department of CSE<br>" +
        "NITK Surathkal";

      GmailApp.sendEmail(email, subject, "", {
        htmlBody: body
      });

      // Write Sent in Column G
      sheet.getRange(i + 1, 7).setValue("Sent");
    }
  }
}
