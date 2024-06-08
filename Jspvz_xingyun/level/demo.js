oS.Init({
    PName: [ oSnowPea1,ofirePeashooter, oLilyPad,oDoomShroom1, oSunPeashooter, ofireWallNut, oIceFumeShroom, oGatlingPea, oNutBowling, oHugeNutBowling, oBoomNutBowling, oTorchwood1, oSunFlower1, oGatlingPea1, oHypnoShroom1, oGloomShroom1, oLawnCleaner, oCoffeeBean],
    ZName: [oZombie,oJalapenoZombie2,oTrashZombie,oZombiejump,oJalapenoZombie,oSmallZombie,oSmallFlagZombie,oSmallConeheadZombie,oSmallFootballZombie],
    PicArr: ["images/interface/background3.jpg"],
    backgroundImage: "images/interface/background3.jpg",
    Coord: 2,
    LF: [0, 1, 1, 2, 2, 1, 1],
    //ZF:[0,0,0,2,2,0,0],
    CanSelectCard: 1,
    LevelName: "测试植物",
    LvlEName: 1,
    SunNum: 1000,
    LargeWaveFlag: {
        10: $("imgFlag3"),
        20: $("imgFlag1")
    }
}, {
    AZ: [
        //oZombie,oConeheadZombie,oFlagZombie,oPoleVaultingZombie,oBucketheadZombie,oNewspaperZombie,oScreenDoorZombie,oFootballZombie,oDancingZombie,oBackupDancer,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oSnorkelZombie,oZomboni,oDolphinRiderZombie,oJackinTheBoxZombie,oBalloonZombie,oImp,oDiggerZombie
        [oZombie, 1, 1, [1]],
        [oJalapenoZombie2 , 1 ,10,[15,20]],
        [oTrashZombie,1,5 ],
        [oZombiejump,,1,5],
        [oJalapenoZombie ,1 ,5],
        [oSmallZombie,1,1],
        [oSmallConeheadZombie ,1 ,2 ],
        [oSmallFootballZombie,1 ,5]
    ],
    FlagNum: 20,
    FlagToSumNum: {
        a1: [1, 5, 7, 10],
        a2: [2, 10, 17, 25, 45]
    },
    FlagToMonitor: {
        9: [ShowLargeWave, 0],
        19: [ShowFinalWave, 0]
    }
});