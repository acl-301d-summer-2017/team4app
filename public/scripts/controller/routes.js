'use strict';

page( '/', app.landingController.index );
page( '/compare' , app.compareController.index );
page( '/about' , app.aboutController.index );
page.start();

