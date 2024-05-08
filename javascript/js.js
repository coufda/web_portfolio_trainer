$(document).ready(function() {
    $(document).foundation();

    // Hack to get off-canvas .menu-icon to fire on iOS
    $('.navbar-toggler-icon').click(function(){ false });
});