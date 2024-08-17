import mailer from "nodemailer";
import password from "../pass/pass.js";

class Mailer {
    constructor() {
        this.user = "robert.sappy@gmail.com";
        this.transporter = this.#getTransporter();
    }

    #getTransporter = () => {
        return mailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: false,
            auth: {
                user: this.user,
                pass: password.appPassword
            }
        });
    }

    sendEmail = async (recipient, obj) => {
        try {
            const info = await this.transporter.sendMail({
                from: `Sead TIX <${this.user}>`,
                to: recipient,
                subject: "Ticket Delivery",
                html: obj
            });
            console.log(info);
        }
        catch (e) {
            console.log(e);
        }
    }
}

export default Mailer;