import { CanActivateFn } from '@angular/router';

export const guardsGuard: CanActivateFn = (route, state) => {


  if (localStorage.getItem('session')){
    return true;

  } else {
    return false;
  }
  
};
