// import CMS from 'netlify-cms-app'
// // Initialize the CMS object
// CMS.init()
// // Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
