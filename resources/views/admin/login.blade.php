<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>dShop | Login to Admin Panel</title>
	
	<!--favicon-->
	<link rel="icon" href="assets/images/favicon-32x32.png" type="image/png" />
	
	<!-- Bootstrap CSS -->
	<link href="{{ asset('admin/assets/css/bootstrap.min.css') }}" rel="stylesheet">
	<link href="{{ asset('admin/assets/css/app.css') }}" rel="stylesheet">
	<link href="{{ asset('admin/assets/css/icons.css') }}" rel="stylesheet">
</head>
<body 
		style="background-position: center; background-size: cover; background-image: url('{{ asset('admin/assets/images/login-images/cart.jpg') }}');" 
		class="d-grid justify-content-center align-items-center">
	
	
	<form method="post" accept="{{ route('admin.login') }}" class="border p-3 mt-5 bg-white" style="width: 30vw;">
		@csrf
		
		<img src="{{ asset('/admin/assets/images/logo.svg') }}" alt="logo" style="width: 80px; margin: 2rem auto; position: relative; left: 50%; transform: translateX(-50%)">
		
		@error('login')
		<div class="alert alert-danger">{{ $message }}</div>
		@enderror
		
		<!-- Email input -->
		<div class="form-outline mb-4">
			<label class="form-label" for="email">Email address</label>
			<input type="email" name="email" id="email" value="admin@admin.com" class="form-control" />
		</div>

		<!-- Password input -->
		<div class="form-outline mb-4">
			<label class="form-label" for="password">Password</label>
			<input type="password" name="password" id="password" value="password" class="form-control" />
		</div>

		<!-- Submit button -->
		<button class="btn btn-primary btn-block mb-4">Sign in</button>
		
		</form>
	
	
	<!-- Bootstrap JS -->
	<script src="{{ asset('admin/assets/js/bootstrap.bundle.min.js') }}"></script>
</body>
</html>