export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('filter', {
        currency: function (value: any) {
            return `${new Intl.NumberFormat('ru-RU').format(Math.ceil(value))} ₸`;
        }
    });
 /*  return {
       provide: {
           filters: {
               currency (value: any): string {
                   return `${new Intl.NumberFormat('ru-RU').format(Math.ceil(value))} ₸`;
               }
           }
       }
   }*/
})
