import nodemailer from 'nodemailer';

// Email configuration
const emailConfig = {
	host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
	port: parseInt(process.env.EMAIL_PORT || '465'),
	secure: process.env.EMAIL_SECURE === 'true',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
	debug: true, // Enable debug output
	connectionTimeout: 10000, // 10 seconds
	greetingTimeout: 10000, // 10 seconds
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Verify transporter configuration
transporter.verify(function (error) {
	if (error) {
		console.error('SMTP connection error:', error);
	} else {
		console.log('SMTP server is ready to take our messages');
	}
});

type EmailTemplate = {
	subject: string;
	html: string;
};

type EmailTemplates = {
	welcome: (name: string, email: string, token: string) => EmailTemplate;
	resetPassword: (data: { link: string }) => EmailTemplate;
	deposit: (data: { amount: number }) => EmailTemplate;
	confirmDeposit: (data: { amount: number }) => EmailTemplate;
	withdraw: (data: { amount: number }) => EmailTemplate;
	confirmWithdraw: (data: { amount: number }) => EmailTemplate;
	trade: (data: {
		amount: number;
		symbol: string;
		type: string;
	}) => EmailTemplate;
};

// Common email styles
const emailStyles = `
<style>
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333333;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
	background-color: black;
  }
  .logo {
    max-width: 200px;
    height: auto;
    margin-bottom: 20px;
  }
  h1 {
    color: #2c3e50;
    font-size: 24px;
    margin-bottom: 20px;
  }
  h4 {
    color: #34495e;
    font-size: 18px;
    margin: 15px 0;
  }
  p {
    margin: 15px 0;
  }
  .button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #3498db;
    color: #ffffff;
    text-decoration: none;
    border-radius: 4px;
    margin: 20px 0;
  }
  .button:hover {
    background-color: #2980b9;
  }
  .amount {
    font-size: 20px;
    font-weight: bold;
    color: #27ae60;
  }
  .footer {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    font-size: 14px;
    color: #7f8c8d;
  }
</style>
`;

// Email templates
export const emailTemplates: EmailTemplates = {
	welcome: (name: string, email: string, token: string) => ({
		subject: 'Welcome to TinkanTrust!',
		html: `
		${emailStyles}
		<div class="container">
			<img src="https://www.TinkanTrust.com/logo.png" alt="TinkanTrust Logo" class="logo" />
			<h1>Welcome to TinkanTrust, ${name}!</h1>
			<p>Thank you for registering with us. We're excited to have you on board!</p>
			<h4>Your Verification Token is: <strong>${token}</strong></h4>
			<p>Verify your email by clicking the button below:</p>
			<a href="https://TinkanTrust.com/auth/verify?email=${email}" class="button">Verify Email</a>
			<p>If you have any questions, feel free to contact our support team.</p>
			<div class="footer">
				<p>Best regards,<br>The TinkanTrust Team</p>
			</div>
		</div>
		`,
	}),
	resetPassword: (data: { link: string }) => ({
		subject: 'Reset Your Password',
		html: `
		${emailStyles}
		<div class="container">
			<img src="https://www.TinkanTrust.com/logo.png" alt="TinkanTrust Logo" class="logo" />
			<h1>Password Reset Request</h1>
			<p>You have requested to reset your password. Click the button below to reset your password:</p>
			<a href="${data.link}" class="button">Reset Password</a>
			<p>If you didn't request this, please ignore this email.</p>
			<div class="footer">
				<p>Best regards,<br>The TinkanTrust Team</p>
			</div>
		</div>
		`,
	}),
	deposit: (data: { amount: number }) => ({
		subject: 'Deposit Successful',
		html: `
		${emailStyles}
		<div class="container">
			<img src="https://www.TinkanTrust.com/logo.png" alt="TinkanTrust Logo" class="logo" />
			<h1>Deposit Request</h1>
			<p>You have requested to deposit <span class="amount">$${data.amount}</span> into your account.</p>
			<div class="footer">
				<p>Best regards,<br>The TinkanTrust Team</p>
			</div>
		</div>
		`,
	}),
	confirmDeposit: (data: { amount: number }) => ({
		subject: 'Deposit Confirmation',
		html: `
		${emailStyles}
		<div class="container">
			<img src="https://www.TinkanTrust.com/logo.png" alt="TinkanTrust Logo" class="logo" />
			<h1>Deposit Confirmation</h1>
			<p>Your deposit of <span class="amount">$${data.amount}</span> has been confirmed.</p>
			<div class="footer">
				<p>Best regards,<br>The TinkanTrust Team</p>
			</div>
		</div>
		`,
	}),
	withdraw: (data: { amount: number }) => ({
		subject: 'Withdrawal Request',
		html: `
		${emailStyles}
		<div class="container">
			<img src="https://www.TinkanTrust.com/logo.png" alt="TinkanTrust Logo" class="logo" />
			<h1>Withdrawal Request</h1>
			<p>You have requested to withdraw <span class="amount">$${data.amount}</span> from your account.</p>
			<div class="footer">
				<p>Best regards,<br>The TinkanTrust Team</p>
			</div>
		</div>
		`,
	}),
	confirmWithdraw: (data: { amount: number }) => ({
		subject: 'Withdrawal Confirmation',
		html: `
		${emailStyles}
		<div class="container">
			<img src="https://www.TinkanTrust.com/logo.png" alt="TinkanTrust Logo" class="logo" />
			<h1>Withdrawal Confirmation</h1>
			<p>Your withdrawal of <span class="amount">$${data.amount}</span> has been confirmed.</p>
			<div class="footer">
				<p>Best regards,<br>The TinkanTrust Team</p>
			</div>
		</div>
		`,
	}),
	trade: (data: { amount: number; symbol: string; type: string }) => ({
		subject: 'Trade Confirmation',
		html: `
		${emailStyles}
		<div class="container">
			<img src="https://www.TinkanTrust.com/logo.png" alt="TinkanTrust Logo" class="logo" />
			<h1>Trade Confirmation</h1>
			<p>Trade of <span class="amount">$${data.amount} ${data.symbol}</span> with order type ${data.type} has been successfully executed.</p>
			<div class="footer">
				<p>Best regards,<br>The TinkanTrust Team</p>
			</div>
		</div>
		`,
	}),
};

type EmailData = {
	welcome: { name: string; email: string; token: string };
	resetPassword: { link: string };
	deposit: { amount: number };
	confirmDeposit: { amount: number };
	withdraw: { amount: number };
	confirmWithdraw: { amount: number };
	trade: { amount: number; symbol: string; type: string };
};

// Send email function
export const sendEmail = async <T extends keyof EmailData>(
	to: string,
	template: T,
	data: EmailData[T]
) => {
	try {
		console.log('Attempting to send email to:', to);
		console.log('Using template:', template);

		let result: EmailTemplate;
		switch (template) {
			case 'welcome': {
				const welcomeData = data as EmailData['welcome'];
				result = emailTemplates.welcome(
					welcomeData.name,
					welcomeData.email,
					welcomeData.token
				);
				break;
			}
			case 'resetPassword': {
				const resetData = data as EmailData['resetPassword'];
				result = emailTemplates.resetPassword(resetData);
				break;
			}
			case 'deposit': {
				const depositData = data as EmailData['deposit'];
				result = emailTemplates.deposit(depositData);
				break;
			}
			case 'confirmDeposit': {
				const confirmDepositData = data as EmailData['confirmDeposit'];
				result = emailTemplates.confirmDeposit(confirmDepositData);
				break;
			}
			case 'withdraw': {
				const withdrawData = data as EmailData['withdraw'];
				result = emailTemplates.withdraw(withdrawData);
				break;
			}
			case 'confirmWithdraw': {
				const confirmWithdrawData =
					data as EmailData['confirmWithdraw'];
				result = emailTemplates.confirmWithdraw(confirmWithdrawData);
				break;
			}
			case 'trade': {
				const tradeData = data as EmailData['trade'];
				result = emailTemplates.trade(tradeData);
				break;
			}
			default:
				throw new Error(`Unsupported email template: ${template}`);
		}

		const { subject, html } = result;
		console.log('Email subject:', subject);

		const mailOptions = {
			from: `"TinkanTrust" <${
				process.env.EMAIL_FROM || 'noreply@TinkanTrust.com'
			}>`,
			replyTo: `"TinkanTrust Support" <${
				process.env.EMAIL_FROM || 'noreply@TinkanTrust.com'
			}>`,
			to,
			subject,
			html,
		};
		console.log('Mail options:', {
			...mailOptions,
			html: '[HTML content]',
		});

		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent successfully:', info);
		return { success: true, info };
	} catch (error) {
		console.error('Detailed error sending email:', {
			error:
				error instanceof Error
					? {
							message: error.message,
							stack: error.stack,
							name: error.name,
					  }
					: error,
			config: {
				host: emailConfig.host,
				port: emailConfig.port,
				secure: emailConfig.secure,
				user: emailConfig.auth.user ? '[REDACTED]' : undefined,
			},
		});
		return {
			error: 'Failed to send email',
			details: error instanceof Error ? error.message : 'Unknown error',
		};
	}
};
