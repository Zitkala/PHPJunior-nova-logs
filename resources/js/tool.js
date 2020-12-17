Nova.booting((Vue, router) => {
    router.addRoutes([
        {
            name: 'nova-log-viewer2-dashboard',
            path: '/nova-log-viewer2/dashboard',
            component: require('./components/Dashboard'),
        },
        {
            name: 'nova-log-viewer2-list',
            path: '/nova-log-viewer2/list',
            component: require('./components/Logs/LogsTool'),
        },
        {
            name: 'nova-log-viewer2-show',
            path: '/nova-log-viewer2/list/:date/:level',
            component: require('./components/Show/Logs'),
        },
    ])
})
