App                                    

└── QueryClientProvider       

    └── ConfigProvider           

        └── BrowserRouter      

            └── Routes                  

                ├── Route path="/"          

                  └── AppLayout  

                        └──  Home   // Main route that renders AppLayout can include nested routes inside AppLayout later

                               └── useHome Query // Hook to fetch data for Home page

                └── Route path="*"

                    └── NotFound   
                
                └── Route path="/about"

                    └── About   
