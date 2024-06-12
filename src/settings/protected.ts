const routerWithAuth: string[] = ['/'];

const routerWithoutAuth: string[] = ['/sign-in', '/sign-up'];

const protectedRouter = {
  routerWithAuth,
  routerWithoutAuth,
};

export default protectedRouter;
