@extends('admin.master')

@section('content') 
    
    <x-breadcrump title="Users" subtitle="View users" />
                 
    
    {{-- table --}}
    <div class="card">
        <div class="card-body">
            <table class="table mb-0 table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($users as $user)
                        <tr>
                           <td scope="row">{{ $loop->iteration }}</td>

                           <td>{{ $user->name }}</td>
                           <td>${{ $user->email }}</td>

                           <td>                 
                                <a href="{{ route('admin.users.show', $user->id) }}" class="btn btn-sm btn-info">
                                    View
                                </a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
  
@endsection