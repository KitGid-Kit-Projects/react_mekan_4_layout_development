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

                          └──   useHome // Hook to fetch data for About page

                └── Route path="/users"

                    └── Users 

                         └── useUsers // Hook to fetch data for Users page

                └── Route path="/create-user"

                    └── Users 

                         └── useCreateUser  //     Hook to make crud  for Create User page             



