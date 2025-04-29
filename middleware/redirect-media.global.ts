export default defineNuxtRouteMiddleware((to) => {

  console.log('coucou')

  if (to.path.startsWith('/media/site/')) {
    const path = to.path.replace('/media/site/', '')
    return navigateTo(`https://modus-admin.sdrvl.ch/media/site/${path}`, {
      external: true,
    })
  }
})
