// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル2":
            case "レベル2":return tiles.createTilemap(hex`1000100003030303030303030301010101010101030101010301010103010101010101010301030103010301030101010101010103010301030103010301010101010101030103010301030103010101010101010301030103010301030101010101010103010301030103010301010101010101030103010301030103010101010101010306030103010304030101010101010103010301030103010101010101010101030103010301030101010101010101010301030103010301010101010101010103050301030103010101010101010101030103010301030101010101010101010301030103010301010101010101010103020301010103010101010101010101`, img`
2 2 2 2 2 2 2 2 2 . . . . . . . 
2 . . . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . 2 . 2 . . . . . . . 
2 . 2 . 2 . 2 . 2 . . . . . . . 
2 . 2 . 2 . 2 . 2 . . . . . . . 
2 . 2 . 2 . 2 . 2 . . . . . . . 
2 . 2 . 2 . 2 . 2 . . . . . . . 
2 . 2 . 2 . 2 . 2 . . . . . . . 
2 . 2 . 2 . 2 . 2 . . . . . . . 
2 . 2 . 2 . 2 . . . . . . . . . 
2 . 2 . 2 . 2 . . . . . . . . . 
2 . 2 . 2 . 2 . . . . . . . . . 
2 . 2 . 2 . 2 . . . . . . . . . 
2 . 2 . 2 . 2 . . . . . . . . . 
2 . 2 . 2 . 2 . . . . . . . . . 
2 . 2 . . . 2 . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`1000100004040404040404040404040404040404040101010101010101030101010101040401010101010101010101010401010404010101010101010101010104010104040104040404040404040101040101040402010101010101010401010401010404040404010101010101010101040104040101010404040101010101010401040401010101010101010201010101010404010104010101010404040404040404040201040101010101010101010101040401010401010104040101040101010404040104010101010101010401010104040401040404040404010104010201040404010102010101010101040404040404040404040404040404040404040404`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . 2 2 2 2 2 2 2 2 . . 2 . . 2 
2 . . . . . . . . 2 . . 2 . . 2 
2 2 2 2 . . . . . . . . . 2 . 2 
2 . . . 2 2 2 . . . . . . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 . . . . 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . . 2 2 . . 2 . . . 2 
2 2 . 2 . . . . . . . 2 . . . 2 
2 2 . 2 2 2 2 2 2 . . 2 . . . 2 
2 2 . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass2,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
