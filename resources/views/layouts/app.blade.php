<!DOCTYPE html>
<html>
<head>
    <title>@yield('title') | {{ config('app.name') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
    @stack('header-scripts')
</head>


<body class="antialiased bg-gray-200 pt-12 h-full h-screen">
<div id="app" class="flex flex-col h-full" v-cloak>
    @yield('body')
</div>

<script src="{{ mix('/js/app.js') }}"></script>
@stack('footer-scripts')
</body>
</html>