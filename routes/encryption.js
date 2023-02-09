const router = require("express").Router();
var crypto = require("crypto");
var path = require("path");
var fs = require("fs");

// To add a new pitch to the investors by the entrepreneurs
router.post('/', async (req, res, next) => {
    try {
        var headerValue = req.headers['content-type'];
        if(headerValue != 'application/json'){
            return res.status(400).send({msg: "Invalid content type. Use 'content-type: 'application/json'"})
        }
        var obj = req.body;
        // var absolutePath = path.resolve("C:/Users/sunidhi/Encryption","ICICI_PUBLIC_CERT_UAT.txt");
        var publicKey = fs.readFileSync("C:/Users/sunidhi/Encryption/ICICI_PUBLIC_CERT_UAT.txt", "utf8");
        // var publicKey = "-----BEGIN CERTIFICATE-----\nMIIFhDCCA2wCCQCIqfcsomoC1jANBgkqhkiG9w0BAQUFADCBgzELMAkGA1UEBhMCSU4xFDASBgNVBAgMC01BSEFSQVNIVFJBMQ8wDQYDVQQHDAZNVU1CQUkxGDAWBgNVBAoMD0lDSUNJIEJhbmsgTHRkLjEMMAoGA1UECwwDQ0lCMSUwIwYDVQQDDBx3d3cuY2libmV4dGFwaS5pY2ljaWJhbmsuY29tMB4XDTE3MDQxMzA3MTkyOVoXDTIyMDQxMjA3MTkyOVowgYMxCzAJBgNVBAYTAklOMRQwEgYDVQQIDAtNQUhBUkFTSFRSQTEPMA0GA1UEBwwGTVVNQkFJMRgwFgYDVQQKDA9JQ0lDSSBCYW5rIEx0ZC4xDDAKBgNVBAsMA0NJQjElMCMGA1UEAwwcd3d3LmNpYm5leHRhcGkuaWNpY2liYW5rLmNvbTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAM+en2ErEsETmfoZJjf3I5DIc8KAt6dv/ZkKYHcpli1gyLFjJNbZnyk4Um7UaKvU0fpqnsLboapXKR0iHFp4/7SR9kTh4FfvFrrp2pKmQd8f/Rf6OPk2/48iX7sCs0nl8IZYMqe1Tt1YAMFPJjPIH/ERx3vnWYhgHUmRGJqjHfo4NeNR0IarF3HAYX4hh6K0LaAQhUoq6SuWyWf9m9qzHRHpWq4eJRsbhPYLaTtt8XS+vPpBjFjfQreDtgWdIXwKuHq8EOS/KxBifThCtEBMGZUSYZBoldq1kdaakkt5FaXhe+g0FWrLcxalaSS4bHK0QCv1Lbh3tcPetCO3XyR1Jj28SL+5gYm464jmjMGURJwocWUhuNd0qAKt8bMv9NCDgKiWSmAlzeznRYeNaay2ckg5aB5tNO5l/8pUh8EwqLyKECFnCoNvBlcaoJIvZ0sprQO+dHzggT/Q9wl0XRFUkPh4SFGHIiqldy6VgA6I7uVWb7ve1Y3P4yhlfTDV/Hr4ZL4gTFVrorS1a4Tqap38iqHnfM3djwgwbnzv0TJZCywZ5ED8MRDmub6W4jNYMVaruG1gLVf7gE2sUY/dgTRu1Hdw3/YlOY9XpQebBP37RD3+Up+oEYxjPe04Cy4rTFx9/8SluuBPvwNHWVmHkv1ULNHum0VQ3kej17jbEeO+FftJAgMBAAEwDQYJKoZIhvcNAQEFBQADggIBAMGX2dKuXsGjujhKxZOFzo8A0QKu+nsw+pFtiJ5KjyOR1vW9pOdG7roJJGr6cU5fUDlUpYDDVIvPiVbPYgWLkVe37+tpM8T77ZYSXdO7G9hhU8uw2pcRHiQMlDotV/RcTGZHyVVaw7TJty3xMH2j0/FIHejcFaYXZYQBA5+zKc7PBsvwn/KQgJ9R4BTqmdWeca1r0+iBXGq1iRg4IGePf0lIc+80AUneC1ceC07RfvI0PJpkLVTkDCXdNK7QtG/cIqjdZ1jtB+ne7cwtksw1ewu5dE3BFNmqdT3DmKHAupTc2ILSup2w/JEEepMIDHO8GvqR0dUXS5xCcXNKwXUMiLPYA56mRKoST5+e2RO5WtVQMHiizEF5iID+WjyXNlVtqMarEjihZ0+/vkABp/Q3AfKs3rtaXxU4crt+RLaaldG/dBXOoUDTpaNR+ktUkNmEPTe9zc7pwwRDC2zNylt4FnhNP2b2t+RLuP+smAROVaXA1owpte3zeh7aiUe02Y6udEzVrKCAvRUiCKoCDH9N101k3lzCFy80rRquHZ7ZZmUrX4DksuPnSuLILR5ss6UkQTZbg7HXtMN2lDTgPjO2UMCjqI+5gPGTqdld4XWDTEW0xdyhJiEgATeqQllbn47B7C7603ltWFpoInafn2NwxBW89wv938bMKpxFxmQcseGH\n-----END CERTIFICATE-----";
        // console.log(typeof(publicKey));
        var buffer = obj;
        var encrypted = crypto.publicEncrypt(publicKey, buffer.toString());
        return res.status(200).send(encrypted.toString("base64"));

    } catch (err) {
        const response = { "Status": "Failure", "Details": err.message }
        return res.status(400).send(response)
    }
});

module.exports = router;