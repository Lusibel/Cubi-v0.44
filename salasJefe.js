var bossRooms = [

    {
    id: 1,

    left: 900,
    top: 1600,

    right: 1700,
    bottom: 2100,

    cameraX: 1300,
    cameraY: 1800,

    bosses: [0, 1],

    activated: false
},

{
    id: 2,

    left: 0,
    top: 1800,

    right: 500,
    bottom: 2300,

    cameraX: 100,
    cameraY: 2000,

    bosses: [2],

    activated: false
}

];

function playerInsideBossRoom(room) {

    return (
        player.x >= room.left &&
        player.x <= room.right &&
        player.y >= room.top &&
        player.y <= room.bottom
    );

}

function iniciarSalaJefe(room) {

    currentBossRoom = room;

    const jefeConDialogo = room.bosses
        .map(id => bosses.find(b => b.id === id))
        .find(b => b && b.dialogos && b.dialogos.length > 0);

    if (jefeConDialogo) {

        mostrarDialogo(jefeConDialogo);

    }

}

function quedanJefesActivos(room) {

    return room.bosses.some(id => {

        const boss = bosses.find(b => b.id === id);

        return boss && boss.hp > 0;

    });

}


