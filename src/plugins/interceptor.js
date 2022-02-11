import router from '../router'

export function setInterceptors(instance) {


  instance.interceptors.request.use(function(config) {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers.common["Authorization"] = token;
      }
      return config;
  }, function(error) {
      return Promise.reject(error);
  });
  
  instance.interceptors.response.use(function(response) {
      console.log('response received');
      if (response.status === 200 || response.status === 201 ) {
          return Promise.resolve(response);
      } else {
          return Promise.reject(response);
      }
  }, function (error) {
      if (error.response.status) {
          switch (error.response.status) {
            case 400:
             
             //do something
              break;
          
            case 401:
              alert("session expired");
              break;
            case 403:
              router.replace({
                path: "/login",
                query: { redirect: router.currentRoute.fullPath }
              });
               break;
            case 404:
              alert('page not exist');
              break;
            case 502:
             setTimeout(() => {
                router.replace({
                  path: "/login",
                  query: {
                    redirect: router.currentRoute.fullPath
                  }
                });
              }, 1000);
          }
          return Promise.reject(error.response);
      }
  });
  
}
