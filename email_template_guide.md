# EmailJS Template Guide

Since you asked for the EmailJS template code, here is a recommended structure for your email body.

## 1. Create Template on EmailJS Dashboard
- Go to **Email Templates** > **Create New Template**.
- Switch to the **HTML** tab (Source Code) if you want full control, or use the visual editor.

## 2. Template Code (HTML)
Paste this into the source code view of your email template:

```html
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f9f9f9; padding: 40px; border-radius: 10px;">
    <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color: #8b5cf6; margin-top: 0;">✨ New Login Alert!</h2>
        <p style="font-size: 16px; color: #4a5568;">
            Someone just successfully logged into your <strong>Reflection App</strong>!
        </p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="font-size: 14px; color: #718096;">
            <strong>System Message:</strong><br>
            {{message}}
        </p>
        <p style="font-size: 12px; color: #a0aec0; margin-top: 30px;">
            This is an automated message from your specific Reflection Website.
        </p>
    </div>
</div>
```

## 3. Template Variables
In the code I wrote for you (`src/main.js`), I am sending the following variable:
- `{{message}}`: Contains the text "Shagun logged in successfully with the secret code!"

Make sure your template uses `{{message}}` to display it.
