window.addEventListener('load', () => {
    // console.log(window.Notification);
    if(!window.Notification) return;

    // console.log(Notification.permission);   
    Notification
    .requestPermission()
    .then(sendNotification)
})

const sendNotification = (permission) => {
    let notification = new Notification('yeni bildirim',{
        body: 'DenemeMesaj  DenemeMesajDenemeMesajDenemeDenemenemeDenemeDenemeDenemeDenemeDenemeDenemeDenemeDenemeDenemenemeDenemeDenemnemeDenemeDenemeDenemeDenemenemeDenemeDenemeDenemeDenemeDenemeDenemeDenemeDenemeDeneme',
        icon: 'logo.png'
    }); 

    notification.onclick = () => {
        window.location.href = 'http://ardaozcan.cf/?i=1';
    }

    console.log(notification);
}