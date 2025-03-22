const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Konfiguracja konta e-mailowego (np. Gmail, SendGrid itp.)
const transporter = nodemailer.createTransport({
  service: "gmail", // Możesz użyć innego dostawcy
  auth: {
    user: "twojemail@gmail.com", // Podaj swój email
    pass: "twojehaslo", // Lepiej użyć OAuth 2.0 lub App Password
  },
});

// Funkcja do wysyłania kodu weryfikacyjnego
exports.sendVerificationCode = functions.https.onCall(async (data, context) => {
  const {email, code} = data;

  const mailOptions = {
    from: "twojemail@gmail.com",
    to: email,
    subject: "Twój kod weryfikacyjny",
    text: `Twój kod weryfikacyjny to: ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {success: true, message: "Kod został wysłany!"};
  } catch (error) {
    return {success: false, message: error.message};
  }
});
