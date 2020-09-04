

        // Loads document completely enclosed script
        $(document).ready(function() {
            // Initialize Pop-ups
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })

            // Initialize AOS.js
            AOS.init({
                once: false
            });
            AOS.refresh()
            
            // Stopping animation fix
            $(window).scroll(function() {
                AOS.refresh()
            })

            // MainTicker Manipulation
            var mainTicker_options = {
                strings: ['I make websites.','I make personal blogs.','I am a full-stack programmer.','I program apps.','I do vector editing.','I do video/graphics editing.','I also repair computers.','I also reformat computers.','I eat codes for breakfast.','I eat logic for lunch.','I eat bugs for dinner.'],
                typeSpeed: 50,
                backSpeed: 25,
                loop: true,
                showCursor: true,
                autoInsertCss: true,
                backDelay: 2000,
            };

            var mainTicker = new Typed('#mainTicker', mainTicker_options);
            // End MainTicker Manipulation

            // Project 1 Gallery 
            $('#project_1_gallery').magnificPopup({
                items: [
                    {
                        src: 'https://www.youtube.com/watch?v=u0HGg0evg2U',
                        type: 'iframe'
                    },
                    {
                        src: '/img/project_1/fn (1).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (2).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (3).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (4).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (5).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (6).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (7).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (8).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (9).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (10).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (11).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (12).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (13).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (14).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (15).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (16).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (17).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (18).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (19).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (20).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_1/fn (21).png',
                        type: 'image'
                    }
                ],
                gallery: {
                    enabled: true
                },
                type: 'image',
                mainClass: 'mfp-with-zoom',
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out'
                }
            })
            // End Project 1 Gallery 

            // Project 2 Gallery 
            $('#project_2_gallery').magnificPopup({
                items: [
                    {
                        src: '/img/project_2/1.jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_2/2.jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_2/3.jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_2/4.jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_2/straight.jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_2/crossover.jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_2/gpt.png',
                        type: 'image'
                    }
                ],
                gallery: {
                    enabled: true
                },
                type: 'image'
            })
            // End Project 3 Gallery 

            // Project 3.1 Gallery 
            $('#project_3_gallery_1').magnificPopup({
                items: [
                    {
                        src: '/img/project_3/v1/v1 (1).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (2).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (3).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (4).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (5).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (6).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (7).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (8).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (9).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (10).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (11).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (12).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (13).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (14).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (15).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (16).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (17).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (18).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (19).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v1/v1 (20).jpg',
                        type: 'image'
                    }
                ],
                gallery: {
                    enabled: true
                },
                type: 'image'
            })
            // End Project 3.1 Gallery 

            // Project 3.2 Gallery 
            $('#project_3_gallery_2').magnificPopup({
                items: [
                    {
                        src: '/img/project_3/v2/v2 (1).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (2).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (3).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (4).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (5).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (6).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (7).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (8).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (9).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (10).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (11).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (12).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (13).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (14).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (15).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (16).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (17).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (18).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (19).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (20).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (21).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (22).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (23).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (24).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (25).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (26).jpg',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (27).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_3/v2/v2 (28).png',
                        type: 'image'
                    }
                ],
                gallery: {
                    enabled: true
                },
                type: 'image'
            })
            // End Project 3.2 Gallery

            
            // Image Enlargement
            $('.image-popup').magnificPopup({
                type: 'image'
            })
            // End Image Enlargement

            // Project 3.2 Gallery 
            $('#project_4_gallery').magnificPopup({
                items: [
                    {
                        src: '/img/project_4/pp (1).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_4/pp (2).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_4/pp (3).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_4/pp (4).png',
                        type: 'image'
                    },
                    {
                        src: '/img/project_4/pp (1).jpg',
                        type: 'image'
                    }
                ],
                gallery: {
                    enabled: true
                },
                type: 'image'
            })
            // End Project 4 Gallery
        });
