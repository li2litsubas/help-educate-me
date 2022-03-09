@extends('layouts/app')


@section('title', 'Demo Page')

@push('footer-scripts')
    <script src="{{ mix('js/demo.js') }}"></script>
@endpush

@section('body')
        
        <demo-component></demo-component>
    
@endsection