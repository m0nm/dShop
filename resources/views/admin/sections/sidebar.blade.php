<div class="sidebar-wrapper" data-simplebar="true">
			<div class="sidebar-header">
				<div>
					<img src="{{ asset('admin/assets/images/logo.svg') }}" class="logo-icon" alt="logo icon">
				</div>
				
				<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
				</div>
			</div>
			<!--navigation-->
			<ul class="metismenu" id="menu">
				<li>
					<a href="/admin/dashboard">
						<div class="parent-icon"><i class='bx bx-home-circle'></i>
						</div>
						<div class="menu-title">Dashboard</div>
					</a>
				</li>
				
				<li class="menu-label">Management</li>
			
				<li>
					<a href="javascript:;" class="has-arrow">
						<div class="parent-icon"><i class='bx bx-images'></i>
						</div>
						<div class="menu-title">Banners</div>
					</a>
					<ul>
						<li> <a href="{{ route('admin.banners.index') }}"><i class="bx bx-right-arrow-alt"></i>View Banners</a>
						</li>
						
						<li> <a href="{{ route('admin.banners.create') }}"><i class="bx bx-right-arrow-alt"></i>Add New Banner</a>
						</li>
					</ul>
				</li>
				{{-- end --}}
				
				
				<li>
					<a href="javascript:;" class="has-arrow">
						<div class="parent-icon"><i class='bx bx-grid-alt'></i>
						</div>
						<div class="menu-title">Categories</div>
					</a>
					<ul>
						<li> <a href="{{ route('admin.categories.index') }}"><i class="bx bx-right-arrow-alt"></i>View Categories</a>
						</li>
						
						<li> <a href="{{ route('admin.categories.create') }}"><i class="bx bx-right-arrow-alt"></i>Add New Category</a>
						</li>
						
						<li> <a href="{{ route('admin.subcategories.index') }}"><i class="bx bx-right-arrow-alt"></i>View Subcategories</a>
						</li>

						<li> <a href="{{ route('admin.subcategories.create') }}"><i class="bx bx-right-arrow-alt"></i>Add New Subcategory</a>
						</li>
					</ul>
				</li>
				{{-- end --}}
				
				<li>
					<a href="javascript:;" class="has-arrow">
						<div class="parent-icon"><i class='bx bx-images'></i>
						</div>
						<div class="menu-title">Products</div>
					</a>
					<ul>
						<li> <a href="{{ route('admin.products.index') }}"><i class="bx bx-right-arrow-alt"></i>View Products</a>
						</li>
						
						<li> <a href="{{ route('admin.products.create') }}"><i class="bx bx-right-arrow-alt"></i>Add New Product</a>
						</li>
					</ul>
				</li>
				{{-- end --}}
				
			
				
				
				<li class="menu-label">Others</li>
			
				<li>
					<a href="https://themeforest.net/user/codervent" target="_blank">
						<div class="parent-icon"><i class="bx bx-support"></i>
						</div>
						<div class="menu-title">Support</div>
					</a>
				</li>
			</ul>
			<!--end navigation-->
		</div>