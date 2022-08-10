<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    
    <title>Reset Your Password</title>
</head>
<body style="font-family: Roboto;">
    <div style="display: grid; place-items: center; padding: 2rem; border-radius: 12px; text-align: center">
        <h1 style="font-size: 24px;">dShop</h1>

        <h3 style="color: black; font-size: 18px;">Click on the button below to reset your password</h3>
        
        <p style="font-size: 14px; font-weight: 300; margin-bottom: 1rem;">(Skip this message if you have not requested to reset your password)</p>
        
        <a href="{{ env('CLIENT_WEBSITE') }}/reset-password?token={{ $token }}" style="padding: 0.5rem 2rem; color: white; background: #42ba96; border: 0; outline: none;">RESET PASSWORD</a>
    </div>
</body>
</html>