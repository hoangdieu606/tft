const demo =
{
    "lang": "vi_VN",
    "set": "13",
    "type": "cdragon-augment",
    "version": "13.7",
    "data": [
        {
            "apiName": "TFT13_TeamupAugment_Reunion",
            "associatedTraits": [
                "TFT13_Squad",
                "TFT13_Pugilist",
                "TFT13_Ambusher",
                "TFT13_Hoverboard",
                "TFT13_Scrap"
            ],
            "composition": [],
            "desc": "Khi Vi tung chiêu, Ekko triệu hồi 3 dư ảnh lao vào mục tiêu của cô, gây 40% sát thương. Khi Ekko tung chiêu, Vi dậm xuống mặt đất về phía mục tiêu của cậu ta, gây 100% sát thương.<br><br>Nhận 1 Vi và Ekko.",
            "effects": {
                "EkkoAfterImageReducedDamage": 0.4000000059604645,
                "ViEarthquakeReducedDamage": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TeamUp_Reunion_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tộc Hệ: Đoàn Tụ",
            "unique": false,
            "org": {
                "desc": "Khi Vi tung chiêu, Ekko triệu hồi 3 dư ảnh lao vào mục tiêu của cô, gây @EkkoAfterImageReducedDamage*100@% sát thương. Khi Ekko tung chiêu, Vi dậm xuống mặt đất về phía mục tiêu của cậu ta, gây @ViEarthquakeReducedDamage*100@% sát thương.<br><br>Nhận 1 Vi và Ekko.",
                "effects": {
                    "EkkoAfterImageReducedDamage": 0.4000000059604645,
                    "ViEarthquakeReducedDamage": 1
                }
            },
            "_key": "TFT13_TeamupAugment_Reunion",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TeamUp_Reunion_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_BruiserCrown",
            "associatedTraits": [
                "TFT13_Bruiser"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Đấu Sĩ, 1 Dây Chuyền Chuộc Tội, và 1 Sett.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Bruiser_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Đấu Sĩ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Đấu Sĩ, 1 Dây Chuyền Chuộc Tội, và 1 Sett.",
                "effects": {}
            },
            "_key": "TFT13_Augment_BruiserCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Bruiser_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_VladCarry",
            "associatedTraits": [
                "TFT13_Sorcerer",
                "TFT13_Watcher"
            ],
            "composition": [],
            "desc": "Nhận 1 Vladimir. Vladimir mạnh nhất của bạn nhận +3 Tầm Đánh, đồng thời nhận thêm 5 Năng Lượng trên mỗi đòn đánh. Kỹ năng của hắn không còn hồi máu nhưng cho 10% Khuếch Đại Sát Thương, gây thêm 80% sát thương và lan sát thương sang kẻ địch gần nhất.",
            "effects": {
                "BonusMana": 5,
                "IncRange": 3,
                "TOOLTIPDamageAmp": 0.10000000149011612,
                "TooltipBonusDamage": 0.800000011920929,
                "{256e31ce}": 50
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Vlad-Hero-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huyết Thệ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Vladimir. Vladimir mạnh nhất của bạn nhận +@IncRange@ Tầm Đánh, đồng thời nhận thêm @BonusMana@ Năng Lượng trên mỗi đòn đánh. Kỹ năng của hắn không còn hồi máu nhưng cho @TOOLTIPDamageAmp*100@% Khuếch Đại Sát Thương, gây thêm @TOOLTIPBonusDamage*100@% sát thương và lan sát thương sang kẻ địch gần nhất.",
                "effects": {
                    "BonusMana": 5,
                    "IncRange": 3,
                    "TOOLTIPDamageAmp": 0.10000000149011612,
                    "TooltipBonusDamage": 0.800000011920929,
                    "{256e31ce}": 50
                }
            },
            "_key": "TFT13_Augment_VladCarry",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Vlad-Hero-II.png"
        },
        {
            "apiName": "TFT13_Augment_Artillerist",
            "associatedTraits": [
                "TFT13_Martialist"
            ],
            "composition": [],
            "desc": "Tên lửa của Pháo Binh gây thêm 15% sát thương. Sau mỗi 65 tên lửa tướng Pháo Binh bắn ra, nhận 1 Súng Hải Tặc (tối đa 2). Nhận 1 Tristana và 1 Urgot. (Tên Lửa Đã Bắn Ra: 0)",
            "effects": {
                "IncreasedRocketDamage": 0.15000000596046448,
                "MaxItems": 2,
                "RocketDamageThreshold": 65
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RocketCollection_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bộ Sưu Tập Tên Lửa",
            "unique": false,
            "org": {
                "desc": "Tên lửa của Pháo Binh gây thêm @IncreasedRocketDamage*100@% sát thương. Sau mỗi @RocketDamageThreshold@ tên lửa tướng Pháo Binh bắn ra, nhận 1 Súng Hải Tặc (tối đa @MaxItems@). Nhận 1 Tristana và 1 Urgot. (Tên Lửa Đã Bắn Ra: @TFTUnitProperty.item:TFT13_Augment_Artillerist_TotalDamage@)",
                "effects": {
                    "IncreasedRocketDamage": 0.15000000596046448,
                    "MaxItems": 2,
                    "RocketDamageThreshold": 65
                }
            },
            "_key": "TFT13_Augment_Artillerist",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RocketCollection_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_TeamupAugment_UnlikelyDuo",
            "associatedTraits": [
                "TFT13_Rebel",
                "TFT13_Crime",
                "TFT13_Pugilist",
                "TFT13_Ambusher"
            ],
            "composition": [],
            "desc": "Jinx và Sevika nhận 10% Sức Mạnh Công Kích và 100 Máu. Khi một trong hai tướng thi triển, họ sẽ trao cho tướng còn lại 10 năng lượng. Cánh tay của Sevika trở nên may mắn hơn.<br><br>Nhận 1 Jinx và 1 Sevika.",
            "effects": {
                "AD": 0.10000000149011612,
                "Health": 100,
                "Mana": 10,
                "{1e90fa01}": 0.10000000149011612
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TeamUp_UnlikelyDuo_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tộc Hệ: Cặp Đôi Bất Đồng",
            "unique": false,
            "org": {
                "desc": "Jinx và Sevika nhận @AD*100@% Sức Mạnh Công Kích và @Health@ Máu. Khi một trong hai tướng thi triển, họ sẽ trao cho tướng còn lại @Mana@ năng lượng. Cánh tay của Sevika trở nên may mắn hơn.<br><br>Nhận 1 Jinx và 1 Sevika.",
                "effects": {
                    "AD": 0.10000000149011612,
                    "Health": 100,
                    "Mana": 10,
                    "{1e90fa01}": 0.10000000149011612
                }
            },
            "_key": "TFT13_TeamupAugment_UnlikelyDuo",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TeamUp_UnlikelyDuo_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Dominator",
            "associatedTraits": [
                "TFT13_Infused"
            ],
            "composition": [],
            "desc": "Tướng Thống Trị nhận 10% Tốc Độ Đánh khi có lá chắn. Khi tướng Thống Trị tiêu diệt kẻ địch, tất cả tướng Thống Trị nhận 100 Lá Chắn trong 3 giây. Nhận 1 Cassiopeia.",
            "effects": {
                "ShieldAmount": 100,
                "ShieldDuration": 3,
                "ShieldPercentAS": 0.10000000149011612
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Domination-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thống Trị",
            "unique": false,
            "org": {
                "desc": "Tướng Thống Trị nhận @ShieldPercentAS*100@% Tốc Độ Đánh khi có lá chắn. Khi tướng Thống Trị tiêu diệt kẻ địch, tất cả tướng Thống Trị nhận @ShieldAmount@ Lá Chắn trong @ShieldDuration@ giây. Nhận 1 Cassiopeia.",
                "effects": {
                    "ShieldAmount": 100,
                    "ShieldDuration": 3,
                    "ShieldPercentAS": 0.10000000149011612
                }
            },
            "_key": "TFT13_Augment_Dominator",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Domination-II.png"
        },
        {
            "apiName": "TFT13_Augment_Sniper",
            "associatedTraits": [
                "TFT13_Sniper"
            ],
            "composition": [],
            "desc": "Các tướng Bắn Tỉa nhận +8% Khuếch Đại Sát Thương với mỗi vòng đấu khởi đầu ở cùng một ô (Tối đa +32%). Nhận 1 Zeri.",
            "effects": {
                "DamageAmp": 8,
                "MaxAmp": 32
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/SniperNest_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ổ Bắn Tỉa",
            "unique": false,
            "org": {
                "desc": "Các tướng Bắn Tỉa nhận +@DamageAmp@% Khuếch Đại Sát Thương với mỗi vòng đấu khởi đầu ở cùng một ô (Tối đa +@MaxAmp@%). Nhận 1 Zeri.",
                "effects": {
                    "DamageAmp": 8,
                    "MaxAmp": 32
                }
            },
            "_key": "TFT13_Augment_Sniper",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/SniperNest_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ArtilleristCrown",
            "associatedTraits": [
                "TFT13_Martialist"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Pháo Binh, 1 Cuồng Cung Runaan và 1 Tristana.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Artillerist_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Pháo Binh",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Pháo Binh, 1 Cuồng Cung Runaan và 1 Tristana.",
                "effects": {}
            },
            "_key": "TFT13_Augment_ArtilleristCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Artillerist_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_FirelightCrest",
            "associatedTraits": [
                "TFT13_Hoverboard"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Ánh Lửa và 1 Zeri.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Hoverboard_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Ánh Lửa",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Ánh Lửa và 1 Zeri.",
                "effects": {}
            },
            "_key": "TFT13_Augment_FirelightCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Hoverboard_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Bruiser",
            "associatedTraits": [
                "TFT13_Bruiser"
            ],
            "composition": [],
            "desc": "Sau mỗi 4 giây, tướng Đấu Sĩ gây thêm sát thương vật lý tương đương 7% Máu tối đa cộng thêm trên đòn đánh kế tiếp. Nhận 1 Steb và 1 Trundle.",
            "effects": {
                "RefreshSeconds": 4,
                "SlamPercentHealth": 0.07000000029802322
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/HeavilySmash_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tấn Công Hạng Nặng",
            "unique": false,
            "org": {
                "desc": "Sau mỗi @RefreshSeconds@ giây, tướng Đấu Sĩ gây thêm sát thương vật lý tương đương @SlamPercentHealth*100@% Máu tối đa cộng thêm trên đòn đánh kế tiếp. Nhận 1 Steb và 1 Trundle.",
                "effects": {
                    "RefreshSeconds": 4,
                    "SlamPercentHealth": 0.07000000029802322
                }
            },
            "_key": "TFT13_Augment_Bruiser",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/HeavilySmash_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Cabal",
            "associatedTraits": [
                "TFT13_Cabal"
            ],
            "composition": [],
            "desc": "Sau mỗi 2 mạng hạ gục bởi tướng Hoa Hồng Đen hoặc Sion, vĩnh viễn tăng cho Sion 3% Sức Mạnh Công Kích và 15 Máu Tối Đa. Nhận 3 tướng Hoa Hồng Đen. (Số cộng dồn: 0)",
            "effects": {
                "NumTakedownsPerStack": 2,
                "SionADPercentPerStack": 0.029999999329447746,
                "SionHealthPerStack": 15
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ForbiddenMagic_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ma Thuật Cấm Kỵ",
            "unique": false,
            "org": {
                "desc": "Sau mỗi @NumTakedownsPerStack@ mạng hạ gục bởi tướng Hoa Hồng Đen hoặc Sion, vĩnh viễn tăng cho Sion @SionADPercentPerStack*100@% Sức Mạnh Công Kích và @SionHealthPerStack@ Máu Tối Đa. Nhận 3 tướng Hoa Hồng Đen. (Số cộng dồn: @TFTUnitProperty.item:TFT13_Augment_Cabal_NumStacks@)",
                "effects": {
                    "NumTakedownsPerStack": 2,
                    "SionADPercentPerStack": 0.029999999329447746,
                    "SionHealthPerStack": 15
                }
            },
            "_key": "TFT13_Augment_Cabal",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ForbiddenMagic_II.TFT_Set13.png",
            "balance": 1,
            "diff": {
                "effects": [
                    "SionADPercentPerStack%",
                    "SionHealthPerStack"
                ]
            }
        },
        {
            "apiName": "TFT13_Augment_WatcherCrest",
            "associatedTraits": [
                "TFT13_Watcher"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Giám Sát và 1 Vander.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Watcher_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Giám Sát",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Giám Sát và 1 Vander.",
                "effects": {}
            },
            "_key": "TFT13_Augment_WatcherCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Watcher_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Watcher",
            "associatedTraits": [
                "TFT13_Watcher"
            ],
            "composition": [],
            "desc": "Mỗi khi bị tấn công, tướng Giám Sát nhận 2% Sức Mạnh Công Kích. Mỗi khi bị trúng kỹ năng, tướng Giám Sát nhận 4 Sức Mạnh Phép Thuật. Nhận 1 Vander.",
            "effects": {
                "IncreaseADByTakeAttack": 2,
                "IncreaseAPByTakeSpell": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BattleScars_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chiến Sẹo",
            "unique": false,
            "org": {
                "desc": "Mỗi khi bị tấn công, tướng Giám Sát nhận @IncreaseADByTakeAttack@% Sức Mạnh Công Kích. Mỗi khi bị trúng kỹ năng, tướng Giám Sát nhận @IncreaseAPByTakeSpell@ Sức Mạnh Phép Thuật. Nhận 1 Vander.",
                "effects": {
                    "IncreaseADByTakeAttack": 2,
                    "IncreaseAPByTakeSpell": 4
                }
            },
            "_key": "TFT13_Augment_Watcher",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BattleScars_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_TeamupAugment_Geniuses",
            "associatedTraits": [
                "TFT13_Academy",
                "TFT13_Hoverboard",
                "TFT13_Ambusher",
                "TFT13_Scrap",
                "TFT13_Invoker"
            ],
            "composition": [],
            "desc": "Khi Heimerdinger tung chiêu, Ekko triệu hồi 3 dư ảnh, mỗi dư ảnh gây 50% sát thương. Khi Ekko tung chiêu, Heimerdinger bắn ra 3 tên lửa, mỗi tên lửa gây 150% sát thương.<br><br>Nhận 1 Heimerdinger, 1 Ekko và 1 Găng Bảo Thạch.",
            "effects": {
                "NumEkkoAfterImages": 3,
                "NumHeimerMissiles": 3,
                "ReducedEkkoDamage": 0.5,
                "ReducedHeimerDamage": 1.5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TeamUp_Geniuses_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tộc Hệ: Thiên Tài",
            "unique": false,
            "org": {
                "desc": "Khi Heimerdinger tung chiêu, Ekko triệu hồi @NumEkkoAfterImages@ dư ảnh, mỗi dư ảnh gây @ReducedEkkoDamage*100@% sát thương. Khi Ekko tung chiêu, Heimerdinger bắn ra @NumHeimerMissiles@ tên lửa, mỗi tên lửa gây @ReducedHeimerDamage*100@% sát thương.<br><br>Nhận 1 Heimerdinger, 1 Ekko và 1 Găng Bảo Thạch.",
                "effects": {
                    "NumEkkoAfterImages": 3,
                    "NumHeimerMissiles": 3,
                    "ReducedEkkoDamage": 0.5,
                    "ReducedHeimerDamage": 1.5
                }
            },
            "_key": "TFT13_TeamupAugment_Geniuses",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TeamUp_Geniuses_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_CabalCrown",
            "associatedTraits": [
                "TFT13_Cabal"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Hoa Hồng Đen, 1 Ngọn Giáo Shojin và 1 Cassiopeia.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Cabal_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Hoa Hồng Đen",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Hoa Hồng Đen, 1 Ngọn Giáo Shojin và 1 Cassiopeia.",
                "effects": {}
            },
            "_key": "TFT13_Augment_CabalCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Cabal_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ConquerorCrown",
            "associatedTraits": [
                "TFT13_Warband"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Chinh Phục, 1 Cung Xanh và 1 Rell.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Conqueror_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Chinh Phục",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Chinh Phục, 1 Cung Xanh và 1 Rell.",
                "effects": {}
            },
            "_key": "TFT13_Augment_ConquerorCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Conqueror_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_EnforcerCrown",
            "associatedTraits": [
                "TFT13_Squad"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Cảnh Binh, 1 Vô Cực Kiếm và 1 Maddie.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Squad_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Cảnh Binh",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Cảnh Binh, 1 Vô Cực Kiếm và 1 Maddie.",
                "effects": {}
            },
            "_key": "TFT13_Augment_EnforcerCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Squad_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Academy",
            "associatedTraits": [
                "TFT13_Academy"
            ],
            "composition": [],
            "desc": "Mỗi khi bạn chế tạo một trang bị, thay vào đó nhận một gói trang bị hoàn chỉnh. Gói trang bị này luôn cho ra một trang bị Học Viện và trang bị đã chế tạo. Nhận 1 trang bị thành phần ngẫu nhiên. Nhận 1 Lux và 1 Ezreal.",
            "effects": {
                "NumItems": 1,
                "NumOptions": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/AcademicCitation_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nghiên Cứu Học Thuật",
            "unique": false,
            "org": {
                "desc": "Mỗi khi bạn chế tạo một trang bị, thay vào đó nhận một gói trang bị hoàn chỉnh. Gói trang bị này luôn cho ra một trang bị Học Viện và trang bị đã chế tạo. Nhận @NumItems@ trang bị thành phần ngẫu nhiên. Nhận 1 Lux và 1 Ezreal.",
                "effects": {
                    "NumItems": 1,
                    "NumOptions": 2
                }
            },
            "_key": "TFT13_Augment_Academy",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/AcademicCitation_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Ambusher",
            "associatedTraits": [
                "TFT13_Ambusher"
            ],
            "composition": [],
            "desc": "Khi tướng Phục Kích tiêu diệt kẻ địch, có cơ hội rớt ra báu vật, xác suất tăng theo Tỉ Lệ Chí Mạng. Giá trị của báu vật cũng có thể chí mạng, cho ra báu vật còn giá trị hơn. Nhận 1 Camille và 1 Powder.",
            "effects": {
                "{51972fee}": 2,
                "{a59e2760}": 0.5,
                "{c209103c}": 0.10999999940395355,
                "{ca332ec1}": 0.5,
                "{d89481f4}": 1.75
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/LootExplosion_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Mưa Báu Vật",
            "unique": false,
            "org": {
                "desc": "Khi tướng Phục Kích tiêu diệt kẻ địch, có cơ hội rớt ra báu vật, xác suất tăng theo Tỉ Lệ Chí Mạng. Giá trị của báu vật cũng có thể chí mạng, cho ra báu vật còn giá trị hơn. Nhận 1 Camille và 1 Powder.",
                "effects": {
                    "{51972fee}": 2,
                    "{a59e2760}": 0.5,
                    "{c209103c}": 0.10999999940395355,
                    "{ca332ec1}": 0.5,
                    "{d89481f4}": 1.75
                }
            },
            "_key": "TFT13_Augment_Ambusher",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/LootExplosion_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_SniperCrest",
            "associatedTraits": [
                "TFT13_Sniper"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Bắn Tỉa và 1 Zeri.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Sniper_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Bắn Tỉa",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Bắn Tỉa và 1 Zeri.",
                "effects": {}
            },
            "_key": "TFT13_Augment_SniperCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Sniper_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ScrapCrown",
            "associatedTraits": [
                "TFT13_Scrap"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Tái Chế, 1 Ziggs và 2 trang bị thành phần ngẫu nhiên.",
            "effects": {
                "NumComponents": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Scrap_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Tái Chế",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Tái Chế, 1 Ziggs và @NumComponents@ trang bị thành phần ngẫu nhiên.",
                "effects": {
                    "NumComponents": 2
                }
            },
            "_key": "TFT13_Augment_ScrapCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Scrap_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_AGoldenFind",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng được tiến hóa bởi Dị Thường sẽ rơi ra 2 vàng sau mỗi 3 mạng tiêu diệt. Nhận 10 lượt đổi miễn phí.",
            "effects": {
                "FreeRerolls": 10,
                "GoldPerRequirement": 2,
                "NumKillsRequirement": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/A-Golden-Find-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tìm Được Vàng",
            "unique": false,
            "org": {
                "desc": "Tướng được tiến hóa bởi Dị Thường sẽ rơi ra @GoldPerRequirement@ vàng sau mỗi @NumKillsRequirement@ mạng tiêu diệt. Nhận @FreeRerolls@ lượt đổi miễn phí.",
                "effects": {
                    "FreeRerolls": 10,
                    "GoldPerRequirement": 2,
                    "NumKillsRequirement": 3
                }
            },
            "_key": "TFT13_Augment_AGoldenFind",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/A-Golden-Find-II.png"
        },
        {
            "apiName": "TFT13_Augment_PitFighterCrown",
            "associatedTraits": [
                "TFT13_Pugilist"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Võ Sĩ Lồng Sắt, 1 Móng Vuốt Sterak và 1 Gangplank.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_PitFighter_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Võ Sĩ Lồng Sắt",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Võ Sĩ Lồng Sắt, 1 Móng Vuốt Sterak và 1 Gangplank.",
                "effects": {}
            },
            "_key": "TFT13_Augment_PitFighterCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_PitFighter_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Enforcer",
            "associatedTraits": [
                "TFT13_Squad"
            ],
            "composition": [],
            "desc": "Các tướng Cảnh Binh nhận thêm 10% Sức Mạnh Công Kích. Cứ mỗi 6 kẻ địch bị Truy Nã tử trận, nhận 6 vàng. Nhận 1 Steb và 1 Maddie.",
            "effects": {
                "BonusAD": 0.10000000149011612,
                "BonusGoldAmount": 6,
                "WantedEnemyBreakpoint": 6
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/CollectTheBounty_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thi Hành Pháp Luật",
            "unique": false,
            "org": {
                "desc": "Các tướng Cảnh Binh nhận thêm @BonusAD*100@% Sức Mạnh Công Kích. Cứ mỗi @WantedEnemyBreakpoint@ kẻ địch bị Truy Nã tử trận, nhận @BonusGoldAmount@ vàng. Nhận 1 Steb và 1 Maddie.",
                "effects": {
                    "BonusAD": 0.10000000149011612,
                    "BonusGoldAmount": 6,
                    "WantedEnemyBreakpoint": 6
                }
            },
            "_key": "TFT13_Augment_Enforcer",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/CollectTheBounty_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_AutomataCrown",
            "associatedTraits": [
                "TFT13_Hextech"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Cỗ Máy Tự Động, 1 Chùy Xuyên Phá và 1 Nocturne.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Automata_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Cỗ Máy Tự Động",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Cỗ Máy Tự Động, 1 Chùy Xuyên Phá và 1 Nocturne.",
                "effects": {}
            },
            "_key": "TFT13_Augment_AutomataCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Automata_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_SorcererCrown",
            "associatedTraits": [
                "TFT13_Sorcerer"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Phù Thủy, 1 Mũ Thích Nghi và 1 Vladimir.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Sorcerer_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Phù Thủy",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Phù Thủy, 1 Mũ Thích Nghi và 1 Vladimir.",
                "effects": {}
            },
            "_key": "TFT13_Augment_SorcererCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Sorcerer_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_SingedCarry",
            "associatedTraits": [
                "TFT13_Titan",
                "TFT13_Crime"
            ],
            "composition": [],
            "desc": "Nhận 1 Singed. Singed mạnh nhất của bạn không thể ra đòn nhưng sẽ liên tục chạy vòng quanh, để lại khói độc gây sát thương phép theo thời gian. Kỹ Năng của hắn sẽ luôn nhắm vào bản thân, cho 30% Hút Máu Toàn Phần và Tốc Độ Di Chuyển.",
            "effects": {
                "TOOLTIPONLYOmnivamp": 30
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Singed-Hero-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Dược Sĩ Điên",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Singed. Singed mạnh nhất của bạn không thể ra đòn nhưng sẽ liên tục chạy vòng quanh, để lại khói độc gây sát thương phép theo thời gian. Kỹ Năng của hắn sẽ luôn nhắm vào bản thân, cho @TOOLTIPONLYOmnivamp@% Hút Máu Toàn Phần và Tốc Độ Di Chuyển.",
                "effects": {
                    "TOOLTIPONLYOmnivamp": 30
                }
            },
            "_key": "TFT13_Augment_SingedCarry",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Singed-Hero-I.png"
        },
        {
            "apiName": "TFT13_Augment_Visionary",
            "associatedTraits": [
                "TFT13_Invoker"
            ],
            "composition": [],
            "desc": "Với mỗi 275 Năng Lượng tướng Tiên Tri tiêu hao trong giao tranh, triệu hồi 1 Bọ Hư Không, tối đa 5 Bọ Hư Không. Nhận 1 Rell và 1 Morgana.<br><br><rules>Bọ Hư Không có 400 - 600 Máu dựa theo giai đoạn.</rules>",
            "effects": {
                "Mana": 275,
                "MaxVoidlings": 5,
                "Stage2Health": 400,
                "Stage3Health": 450,
                "Stage4Health": 500,
                "Stage5Health": 550,
                "Stage6Health": 600,
                "{3bc62dd2}": 60
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Planning-Ahead-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Triệu Gọi Hư Không",
            "unique": false,
            "org": {
                "desc": "Với mỗi @Mana@ Năng Lượng tướng Tiên Tri tiêu hao trong giao tranh, triệu hồi 1 Bọ Hư Không, tối đa @MaxVoidlings@ Bọ Hư Không. Nhận 1 Rell và 1 Morgana.<br><br><rules>Bọ Hư Không có @Stage2Health@ - @Stage6Health@ Máu dựa theo giai đoạn.</rules>",
                "effects": {
                    "Mana": 275,
                    "MaxVoidlings": 5,
                    "Stage2Health": 400,
                    "Stage3Health": 450,
                    "Stage4Health": 500,
                    "Stage5Health": 550,
                    "Stage6Health": 600,
                    "{3bc62dd2}": 60
                }
            },
            "_key": "TFT13_Augment_Visionary",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Planning-Ahead-II.png"
        },
        {
            "apiName": "TFT13_Augment_FirelightCrown",
            "associatedTraits": [
                "TFT13_Hoverboard"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Ánh Lửa, 1 Lời Thề Hộ Vệ và 1 Scar.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Hoverboard_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Ánh Lửa",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Ánh Lửa, 1 Lời Thề Hộ Vệ và 1 Scar.",
                "effects": {}
            },
            "_key": "TFT13_Augment_FirelightCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Hoverboard_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_TeamupAugment_BloodBrothers",
            "associatedTraits": [
                "TFT13_Infused",
                "TFT13_Family",
                "TFT13_Watcher"
            ],
            "composition": [],
            "desc": "Vander được tăng vĩnh viễn 30 Máu tối đa mỗi lần Silco tung chiêu. Silco vĩnh viễn nhận thêm 6 Sức Mạnh Phép Thuật mỗi lần Vander tử trận.<br><br>Nhận 1 Vander 2 sao, 1 Silco và 1 Ngọn Giáo Shojin.",
            "effects": {
                "APGainPerDeath": 6,
                "MaxHealthGainPerCast": 30
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TeamUp_BloodBrothers_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tộc Hệ: Chuyện Có Thể Đã Khác",
            "unique": false,
            "org": {
                "desc": "Vander được tăng vĩnh viễn @MaxHealthGainPerCast@ Máu tối đa mỗi lần Silco tung chiêu. Silco vĩnh viễn nhận thêm @APGainPerDeath@ Sức Mạnh Phép Thuật mỗi lần Vander tử trận.<br><br>Nhận 1 Vander 2 sao, 1 Silco và 1 Ngọn Giáo Shojin.",
                "effects": {
                    "APGainPerDeath": 6,
                    "MaxHealthGainPerCast": 30
                }
            },
            "_key": "TFT13_TeamupAugment_BloodBrothers",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TeamUp_BloodBrothers_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Firelight",
            "associatedTraits": [
                "TFT13_Hoverboard"
            ],
            "composition": [],
            "desc": "Tướng Ánh Lửa nhận được 9% Sức Mạnh Công Kích và 9 Sức Mạnh Phép Thuật khi họ bắt đầu một cú lướt Ánh Lửa. Nhận thêm 3% nữa với mỗi ô đã di chuyển trong giao tranh. Nhận 1 Scar và Zeri.",
            "effects": {
                "Bonus": 3,
                "FirelightBonusAD": 0.09000000357627869,
                "FirelightBonusAP": 9,
                "{445a9cb6}": 99
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GuerillaWarfare_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chiến Tranh Trên Không",
            "unique": false,
            "org": {
                "desc": "Tướng Ánh Lửa nhận được @FirelightBonusAD*100@% Sức Mạnh Công Kích và @FirelightBonusAP@ Sức Mạnh Phép Thuật khi họ bắt đầu một cú lướt Ánh Lửa. Nhận thêm @Bonus@% nữa với mỗi ô đã di chuyển trong giao tranh. Nhận 1 Scar và Zeri.",
                "effects": {
                    "Bonus": 3,
                    "FirelightBonusAD": 0.09000000357627869,
                    "FirelightBonusAP": 9,
                    "{445a9cb6}": 99
                }
            },
            "_key": "TFT13_Augment_Firelight",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/GuerillaWarfare_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_TeamupAugment_Sisters",
            "associatedTraits": [
                "TFT13_Squad",
                "TFT13_Rebel",
                "TFT13_Pugilist",
                "TFT13_Ambusher"
            ],
            "composition": [],
            "desc": "Nhận thêm tộc/hệ Chị Em. Khi Vi tham gia hạ gục, Jinx nhận thêm 80% Tốc Độ Đánh trong 10 giây. Khi Jinx tham gia hạ gục, Vi nhận thêm 80% Sức Mạnh Công Kích trong 10 giây.<br><br>Nhận 1 Vi và Jinx.",
            "effects": {
                "ADBuff": 0.800000011920929,
                "ASBuff": 0.800000011920929,
                "JinxDuration": 10,
                "ViDuration": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TeamUp_Sisters_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tộc Hệ: Chị Em",
            "unique": false,
            "org": {
                "desc": "Nhận thêm tộc/hệ Chị Em. Khi Vi tham gia hạ gục, Jinx nhận thêm @ASBuff*100@% Tốc Độ Đánh trong @JinxDuration@ giây. Khi Jinx tham gia hạ gục, Vi nhận thêm @ADBuff*100@% Sức Mạnh Công Kích trong @ViDuration@ giây.<br><br>Nhận 1 Vi và Jinx.",
                "effects": {
                    "ADBuff": 0.800000011920929,
                    "ASBuff": 0.800000011920929,
                    "JinxDuration": 10,
                    "ViDuration": 10
                }
            },
            "_key": "TFT13_TeamupAugment_Sisters",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TeamUp_Sisters_II.TFT_Set13.png",
            "balance": 1,
            "diff": {
                "effects": [
                    "ASBuff%",
                    "JinxDuration",
                    "ViDuration"
                ]
            }
        },
        {
            "apiName": "TFT13_Augment_AnotherAnomaly",
            "associatedTraits": [],
            "composition": [],
            "desc": "Sau vòng Dị Thường ở 4-6, nhận 1 trang bị có khả năng sao chép Hiệu Ứng Dị Thường được chọn sang tướng được trang bị.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Another-Anomaly-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Một Dị Thường Nữa",
            "unique": false,
            "org": {
                "desc": "Sau vòng Dị Thường ở 4-6, nhận 1 trang bị có khả năng sao chép Hiệu Ứng Dị Thường được chọn sang tướng được trang bị.",
                "effects": {}
            },
            "_key": "TFT13_Augment_AnotherAnomaly",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Another-Anomaly-II.png"
        },
        {
            "apiName": "TFT13_Augment_QuickstrikerCrown",
            "associatedTraits": [
                "TFT13_Challenger"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Cực Tốc, 1 Cuồng Đao Guinsoo và 1 Nocturne.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Quickstriker_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Cực Tốc",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Cực Tốc, 1 Cuồng Đao Guinsoo và 1 Nocturne.",
                "effects": {}
            },
            "_key": "TFT13_Augment_QuickstrikerCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Quickstriker_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_CabalCrest",
            "associatedTraits": [
                "TFT13_Cabal"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Hoa Hồng Đen.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Cabal_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Hoa Hồng Đen",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Hoa Hồng Đen.",
                "effects": {}
            },
            "_key": "TFT13_Augment_CabalCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Cabal_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_VisionaryCrown",
            "associatedTraits": [
                "TFT13_Invoker"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Tiên Tri, 1 Ngọn Giáo Shojin và 1 Renata Glasc.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Visionary_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Tiên Tri",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Tiên Tri, 1 Ngọn Giáo Shojin và 1 Renata Glasc.",
                "effects": {}
            },
            "_key": "TFT13_Augment_VisionaryCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Visionary_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Sentinel",
            "associatedTraits": [
                "TFT13_Titan"
            ],
            "composition": [],
            "desc": "Tướng Vệ Binh được tăng 5% Giáp và Kháng Phép cộng thêm. Sau mỗi 4 giây, đòn đánh kế tiếp gây thêm sát thương phép bằng 75% tổng chỉ số chống chịu của họ. Nhận 1 Loris.",
            "effects": {
                "Interval": 4,
                "PercGain": 0.05000000074505806,
                "ResistToDamageRatio": 0.75
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/SentinelAssembly_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nện Khiên",
            "unique": false,
            "org": {
                "desc": "Tướng Vệ Binh được tăng @PercGain*100@% Giáp và Kháng Phép cộng thêm. Sau mỗi @Interval@ giây, đòn đánh kế tiếp gây thêm sát thương phép bằng @ResistToDamageRatio*100@% tổng chỉ số chống chịu của họ. Nhận 1 Loris.",
                "effects": {
                    "Interval": 4,
                    "PercGain": 0.05000000074505806,
                    "ResistToDamageRatio": 0.75
                }
            },
            "_key": "TFT13_Augment_Sentinel",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/SentinelAssembly_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_SniperCrown",
            "associatedTraits": [
                "TFT13_Sniper"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Bắn Tỉa, 1 Vô Cực Kiếm và 1 Zeri.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Sniper_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Bắn Tỉa",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Bắn Tỉa, 1 Vô Cực Kiếm và 1 Zeri.",
                "effects": {}
            },
            "_key": "TFT13_Augment_SniperCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Sniper_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ExperimentCrest",
            "associatedTraits": [
                "TFT13_Experiment"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thí Nghiệm và 1 Urgot.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Experiment_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Thí Nghiệm",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thí Nghiệm và 1 Urgot.",
                "effects": {}
            },
            "_key": "TFT13_Augment_ExperimentCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Experiment_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_FamilyCrown",
            "associatedTraits": [
                "TFT13_Family"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Gia Đình và 1 Dây Chuyền Chuộc Tội.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Family_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Gia Đình",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Gia Đình và 1 Dây Chuyền Chuộc Tội.",
                "effects": {}
            },
            "_key": "TFT13_Augment_FamilyCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Family_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_SentinelCrest",
            "associatedTraits": [
                "TFT13_Titan"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Vệ Binh và 1 Rell.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Sentinel_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Vệ Binh",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Vệ Binh và 1 Rell.",
                "effects": {}
            },
            "_key": "TFT13_Augment_SentinelCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Sentinel_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ChainsawCarry",
            "associatedTraits": [
                "TFT13_Bruiser"
            ],
            "composition": [],
            "desc": "Nhận 2 Renni. Kỹ Năng của Renni mạnh nhất của bạn được giảm 10 Năng Lượng yêu cầu và khiến tướng này lao tới kẻ địch ở xa nhất trong phạm vi 2 ô, gây 110% sát thương lên mục tiêu và ít sát thương hơn lên các kẻ địch trên đường.",
            "effects": {
                "TOOLTIPAbilityDamage": 1.100000023841858,
                "TOOLTIPHexDistance": 2,
                "TOOLTIPManaReduction": 10,
                "{9dff3ac5}": 0.30000001192092896
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Chainsaw-Hero-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Trả Thù Tàn Bạo",
            "unique": false,
            "org": {
                "desc": "Nhận 2 Renni. Kỹ Năng của Renni mạnh nhất của bạn được giảm @TOOLTIPManaReduction@ Năng Lượng yêu cầu và khiến tướng này lao tới kẻ địch ở xa nhất trong phạm vi @TOOLTIPHexDistance@ ô, gây @TOOLTIPAbilityDamage*100@% sát thương lên mục tiêu và ít sát thương hơn lên các kẻ địch trên đường.",
                "effects": {
                    "TOOLTIPAbilityDamage": 1.100000023841858,
                    "TOOLTIPHexDistance": 2,
                    "TOOLTIPManaReduction": 10,
                    "{9dff3ac5}": 0.30000001192092896
                }
            },
            "_key": "TFT13_Augment_ChainsawCarry",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Chainsaw-Hero-II.png"
        },
        {
            "apiName": "TFT13_Augment_PrimeCarry",
            "associatedTraits": [
                "TFT13_Watcher"
            ],
            "composition": [],
            "desc": "Nhận 1 Vander. Vander mạnh nhất của bạn nhận một Kỹ Năng mới toanh nhưng không còn cho thêm chỉ số chống chịu, gây thêm 70% sát thương và đấm văng mục tiêu về phía sau, gây 35% sát thương gốc lên những kẻ địch trúng chiêu.",
            "effects": {
                "TOOLTIPONLYSplashPerc": 0.3499999940395355,
                "TooltipBonusDamage": 0.699999988079071,
                "TOOLTIPMana": 60
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Prime-Hero-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tháo Găng",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Vander. Vander mạnh nhất của bạn nhận một Kỹ Năng mới toanh nhưng không còn cho thêm chỉ số chống chịu, gây thêm @TOOLTIPBonusDamage*100@% sát thương và đấm văng mục tiêu về phía sau, gây @TOOLTIPONLYSplashPerc*100@% sát thương gốc lên những kẻ địch trúng chiêu.",
                "effects": {
                    "TOOLTIPONLYSplashPerc": 0.3499999940395355,
                    "TooltipBonusDamage": 0.699999988079071,
                    "{8cfa39af}": 60
                }
            },
            "_key": "TFT13_Augment_PrimeCarry",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Prime-Hero-II.png"
        },
        {
            "apiName": "TFT13_Augment_RebelCrest",
            "associatedTraits": [
                "TFT13_Rebel"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Nổi Loạn và 1 Akali.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Rebel_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Nổi Loạn",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Nổi Loạn và 1 Akali.",
                "effects": {}
            },
            "_key": "TFT13_Augment_RebelCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Rebel_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Experiment",
            "associatedTraits": [
                "TFT13_Experiment"
            ],
            "composition": [],
            "desc": "Thí Nghiệm nhận 12% Máu và cho một ô đặc biệt. Thí Nghiệm trong ô này bị tiêu diệt khi bắt đầu giao tranh, và trao thưởng Thí Nghiệm đến những ô phòng thí nghiệm khác. Nhận 3 tướng Thí Nghiệm.",
            "effects": {
                "Health": 0.11999999731779099,
                "{1b889d1c}": 100
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TheMutationMustSurvive_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đột Biến Để Sinh Tồn",
            "unique": false,
            "org": {
                "desc": "Thí Nghiệm nhận @Health*100@% Máu và cho một ô đặc biệt. Thí Nghiệm trong ô này bị tiêu diệt khi bắt đầu giao tranh, và trao thưởng Thí Nghiệm đến những ô phòng thí nghiệm khác. Nhận 3 tướng Thí Nghiệm.",
                "effects": {
                    "Health": 0.11999999731779099,
                    "{1b889d1c}": 100
                }
            },
            "_key": "TFT13_Augment_Experiment",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TheMutationMustSurvive_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Conqueror",
            "associatedTraits": [
                "TFT13_Warband"
            ],
            "composition": [],
            "desc": "Tướng Chinh Phục sẽ hành quyết kẻ địch thấp hơn 12% Máu. Khi hành quyết, họ nhận 5 Giáp và Kháng Phép cho đến hết giao tranh. Nhận 1 Darius và 1 Draven.",
            "effects": {
                "ArmorandMagicResist": 5,
                "BaseExecuteThreshold": 12,
                "NumKills": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/NoxianGuillotine_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Máy Chém Noxus",
            "unique": false,
            "org": {
                "desc": "Tướng Chinh Phục sẽ hành quyết kẻ địch thấp hơn @BaseExecuteThreshold@% Máu. Khi hành quyết, họ nhận @ArmorandMagicResist@ Giáp và Kháng Phép cho đến hết giao tranh. Nhận 1 Darius và 1 Draven.",
                "effects": {
                    "ArmorandMagicResist": 5,
                    "BaseExecuteThreshold": 12,
                    "NumKills": 1
                }
            },
            "_key": "TFT13_Augment_Conqueror",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/NoxianGuillotine_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_AcademyCrown",
            "associatedTraits": [
                "TFT13_Academy"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Học Viện và 1 trang bị tài trợ ngẫu nhiên.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Academy_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Học Viện",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Học Viện và 1 trang bị tài trợ ngẫu nhiên.",
                "effects": {}
            },
            "_key": "TFT13_Augment_AcademyCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Academy_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_WatcherCrown",
            "associatedTraits": [
                "TFT13_Watcher"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Giám Sát, 1 Trái Tim Kiên Định và 1 Scar.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Watcher_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Giám Sát",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Giám Sát, 1 Trái Tim Kiên Định và 1 Scar.",
                "effects": {}
            },
            "_key": "TFT13_Augment_WatcherCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Watcher_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Quickstriker",
            "associatedTraits": [
                "TFT13_Challenger"
            ],
            "composition": [],
            "desc": "Khi bắt đầu giao tranh và sau mỗi 6 giây, tất cả tướng Cực Tốc sẽ tấn công nhanh hơn 85% trong 2.5 giây. Nhận 1 Nocturne và Akali.",
            "effects": {
                "AttackSpeed": 0.8500000238418579,
                "BuffDuration": 2.5,
                "TimeBetweenProcs": 6
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Rush_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hưng Phấn Bộc Phát",
            "unique": false,
            "org": {
                "desc": "Khi bắt đầu giao tranh và sau mỗi @TimeBetweenProcs@ giây, tất cả tướng Cực Tốc sẽ tấn công nhanh hơn @AttackSpeed*100@% trong @BuffDuration@ giây. Nhận 1 Nocturne và Akali.",
                "effects": {
                    "AttackSpeed": 0.8500000238418579,
                    "BuffDuration": 2.5,
                    "TimeBetweenProcs": 6
                }
            },
            "_key": "TFT13_Augment_Quickstriker",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Rush_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Formswapper",
            "associatedTraits": [
                "TFT13_FormSwapper"
            ],
            "composition": [],
            "desc": "Khi bạn triển khai cùng tướng Song Hình ở 2 dạng khác nhau, cả hai sẽ nhận thêm 30 Sức Mạnh Phép Thuật, Giáp và Kháng Phép và 30% Sức Mạnh Công Kích. Khi nâng tướng Song Hình 3 sao, nhận 1 bản sao 2 sao. Nhận 1 Swain và 1 Gangplank.",
            "effects": {
                "BonusStats": 30
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Coexistence_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chơi Cả Hai?",
            "unique": false,
            "org": {
                "desc": "Khi bạn triển khai cùng tướng Song Hình ở 2 dạng khác nhau, cả hai sẽ nhận thêm @BonusStats@ Sức Mạnh Phép Thuật, Giáp và Kháng Phép và @BonusStats@% Sức Mạnh Công Kích. Khi nâng tướng Song Hình 3 sao, nhận 1 bản sao 2 sao. Nhận 1 Swain và 1 Gangplank.",
                "effects": {
                    "BonusStats": 30
                }
            },
            "_key": "TFT13_Augment_Formswapper",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Coexistence_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_EnforcerCrest",
            "associatedTraits": [
                "TFT13_Squad"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Cảnh Binh.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Squad_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Cảnh Binh",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Cảnh Binh.",
                "effects": {}
            },
            "_key": "TFT13_Augment_EnforcerCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Squad_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Scrap",
            "associatedTraits": [
                "TFT13_Scrap"
            ],
            "composition": [],
            "desc": "Với mỗi 6 trang bị thành phần mà tướng Tái Chế chuyển hóa, nhận 1 trang bị thành phần ngẫu nhiên (tối đa 5). Nhận 1 Powder và 1 Trundle.<br><br>Đã chuyển hóa: 0/6",
            "effects": {
                "MaxComponents": 5,
                "NumScrapItemsConverted": 6
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TopOfTheScrapHeap_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bậc Thầy Tái Chế",
            "unique": false,
            "org": {
                "desc": "Với mỗi @NumScrapItemsConverted@ trang bị thành phần mà tướng Tái Chế chuyển hóa, nhận 1 trang bị thành phần ngẫu nhiên (tối đa @MaxComponents@). Nhận 1 Powder và 1 Trundle.<br><br>Đã chuyển hóa: @TFTUnitProperty.item:TFT13_Augment_Scrap_NumComponents@/@NumScrapItemsConverted@",
                "effects": {
                    "MaxComponents": 5,
                    "NumScrapItemsConverted": 6
                }
            },
            "_key": "TFT13_Augment_Scrap",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TopOfTheScrapHeap_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_FamilyCrest",
            "associatedTraits": [
                "TFT13_Family"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Gia Đình.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Family_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Gia Đình",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Gia Đình.",
                "effects": {}
            },
            "_key": "TFT13_Augment_FamilyCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Family_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_AmbusherCrest",
            "associatedTraits": [
                "TFT13_Ambusher"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Phục Kích và 1 Camille.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Ambusher_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Phục Kích",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Phục Kích và 1 Camille.",
                "effects": {}
            },
            "_key": "TFT13_Augment_AmbusherCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Ambusher_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_QuickstrikerCrest",
            "associatedTraits": [
                "TFT13_Challenger"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Cực Tốc và 1 Akali.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Quickstriker_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Cực Tốc",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Cực Tốc và 1 Akali.",
                "effects": {}
            },
            "_key": "TFT13_Augment_QuickstrikerCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Quickstriker_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Family",
            "associatedTraits": [
                "TFT13_Family"
            ],
            "composition": [],
            "desc": "Nếu ít nhất 2 thành viên Gia Đình còn sống sau 15 giây giao tranh hoặc khi kết thúc giao tranh, nhận 1 bản sao ngẫu nhiên của Vander, Powder hoặc Violet. Nhận 1 Powder và 1 Violet.",
            "effects": {
                "MinNumFamilyMembers": 2,
                "NumCopies": 1,
                "TimeRequirement": 15
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/WelcomeToThePlayground_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chào Mừng Đến Sân Chơi",
            "unique": false,
            "org": {
                "desc": "Nếu ít nhất @MinNumFamilyMembers@ thành viên Gia Đình còn sống sau @TimeRequirement@ giây giao tranh hoặc khi kết thúc giao tranh, nhận 1 bản sao ngẫu nhiên của Vander, Powder hoặc Violet. Nhận 1 Powder và 1 Violet.",
                "effects": {
                    "MinNumFamilyMembers": 2,
                    "NumCopies": 1,
                    "TimeRequirement": 15
                }
            },
            "_key": "TFT13_Augment_Family",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/WelcomeToThePlayground_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_DominatorCrown",
            "associatedTraits": [
                "TFT13_Infused"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thống Trị, 1 Lời Thề Hộ Vệ và 1 Blitzcrank.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Dominator_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Thống Trị",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thống Trị, 1 Lời Thề Hộ Vệ và 1 Blitzcrank.",
                "effects": {}
            },
            "_key": "TFT13_Augment_DominatorCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Dominator_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Chembaron",
            "associatedTraits": [
                "TFT13_Crime"
            ],
            "composition": [],
            "desc": "Mỗi khi bạn chọn giữ lại Shimmer trên Chợ Đen, hồi lại 4 máu người chơi và nhận 6 vàng. Nhận 1 Renni.",
            "effects": {
                "Gold": 6,
                "Heal": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/WarForTheUndercity_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chiến Tranh Thành Phố Ngầm",
            "unique": false,
            "org": {
                "desc": "Mỗi khi bạn chọn giữ lại Shimmer trên Chợ Đen, hồi lại @Heal@ máu người chơi và nhận @Gold@ vàng. Nhận 1 Renni.",
                "effects": {
                    "Gold": 6,
                    "Heal": 4
                }
            },
            "_key": "TFT13_Augment_Chembaron",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/WarForTheUndercity_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_RebelCrown",
            "associatedTraits": [
                "TFT13_Rebel"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Nổi Loạn, 1 Găng Bảo Thạch và 1 Akali.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Rebel_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Nổi Loạn",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Nổi Loạn, 1 Găng Bảo Thạch và 1 Akali.",
                "effects": {}
            },
            "_key": "TFT13_Augment_RebelCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Rebel_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_VisionaryCrest",
            "associatedTraits": [
                "TFT13_Invoker"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Tiên Tri và 1 Renata Glasc.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Visionary_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Tiên Tri",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Tiên Tri và 1 Renata Glasc.",
                "effects": {}
            },
            "_key": "TFT13_Augment_VisionaryCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Visionary_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_FishCarry",
            "associatedTraits": [
                "TFT13_Titan",
                "TFT13_Crime"
            ],
            "composition": [],
            "desc": "Nhận 1 Steb. Kỹ Năng từ Steb mạnh nhất của bạn được giảm 10 Năng Lượng Tiêu Hao, nhưng không còn hồi máu. Kỹ năng của Steb sẽ cho 30% Hút Máu Toàn Phần và ra đòn 3 lần, mỗi lần gây 65% sát thương.",
            "effects": {
                "ManaReduction": 10,
                "TOOLTIPONLYModifiedDamage": 0.6499999761581421,
                "TOOLTIPONLYOmnivamp": 30
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/FishHero_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bác Sĩ Chiến Trường",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Steb. Kỹ Năng từ Steb mạnh nhất của bạn được giảm @ManaReduction@ Năng Lượng Tiêu Hao, nhưng không còn hồi máu. Kỹ năng của Steb sẽ cho @TOOLTIPONLYOmnivamp@% Hút Máu Toàn Phần và ra đòn 3 lần, mỗi lần gây @TOOLTIPONLYModifiedDamage*100@% sát thương.",
                "effects": {
                    "ManaReduction": 10,
                    "TOOLTIPONLYModifiedDamage": 0.6499999761581421,
                    "TOOLTIPONLYOmnivamp": 30
                }
            },
            "_key": "TFT13_Augment_FishCarry",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/FishHero_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ArtilleristPlus",
            "associatedTraits": [
                "TFT13_Martialist"
            ],
            "composition": [],
            "desc": "Tên lửa của Pháo Binh gây thêm 15% sát thương. Sau mỗi 65 tên lửa tướng Pháo Binh bắn ra, nhận 1 Súng Hải Tặc (tối đa 2). Nhận 1 Tristana và 1 Urgot. (Tên Lửa Đã Bắn Ra: 0)",
            "effects": {
                "IncreasedRocketDamage": 0.15000000596046448,
                "MaxItems": 2,
                "RocketDamageThreshold": 65
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RocketCollection_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Sưu Tầm Tên Lửa+",
            "unique": false,
            "org": {
                "desc": "Tên lửa của Pháo Binh gây thêm @IncreasedRocketDamage*100@% sát thương. Sau mỗi @RocketDamageThreshold@ tên lửa tướng Pháo Binh bắn ra, nhận 1 Súng Hải Tặc (tối đa @MaxItems@). Nhận 1 Tristana và 1 Urgot. (Tên Lửa Đã Bắn Ra: @TFTUnitProperty.item:TFT13_Augment_Artillerist_TotalDamage@)",
                "effects": {
                    "IncreasedRocketDamage": 0.15000000596046448,
                    "MaxItems": 2,
                    "RocketDamageThreshold": 65
                }
            },
            "_key": "TFT13_Augment_ArtilleristPlus",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RocketCollection_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_BruiserCrest",
            "associatedTraits": [
                "TFT13_Bruiser"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Đấu Sĩ và 1 Sett.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Bruiser_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Đấu Sĩ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Đấu Sĩ và 1 Sett.",
                "effects": {}
            },
            "_key": "TFT13_Augment_BruiserCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Bruiser_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_SorcererCrest",
            "associatedTraits": [
                "TFT13_Sorcerer"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Phù Thủy và 1 Vladimir.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Sorcerer_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Phù Thủy",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Phù Thủy và 1 Vladimir.",
                "effects": {}
            },
            "_key": "TFT13_Augment_SorcererCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Sorcerer_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_PitFighterCrest",
            "associatedTraits": [
                "TFT13_Pugilist"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Võ Sĩ Lồng Sắt và 1 Urgot.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_PitFighter_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Võ Sĩ Lồng Sắt",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Võ Sĩ Lồng Sắt và 1 Urgot.",
                "effects": {}
            },
            "_key": "TFT13_Augment_PitFighterCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_PitFighter_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ConquerorCrest",
            "associatedTraits": [
                "TFT13_Warband"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Chinh Phục và 1 Rell.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Conqueror_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Chinh Phục",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Chinh Phục và 1 Rell.",
                "effects": {}
            },
            "_key": "TFT13_Augment_ConquerorCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Conqueror_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_TrundleCarry",
            "associatedTraits": [
                "TFT13_Bruiser",
                "TFT13_Scrap"
            ],
            "composition": [],
            "desc": "Nhận 1 Trundle. Kỹ Năng từ Trundle mạnh nhất của bạn không còn hồi máu, nhưng sẽ cho hắn 140% Tốc Độ Đánh trong 5 giây, đồng thời vĩnh viễn cho hắn 1.5% Sức Mạnh Công Kích. Năng lượng tối đa của hắn được giảm đi 50.",
            "effects": {
                "ManaReduction": 50,
                "TOOLTIPONLYADPerCast": 1.5,
                "TOOLTIPONLYAS": 140,
                "TOOLTIPONLYDuration": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Trundle-Hero-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thích Chơi Troll",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Trundle. Kỹ Năng từ Trundle mạnh nhất của bạn không còn hồi máu, nhưng sẽ cho hắn @TOOLTIPONLYAS@% Tốc Độ Đánh trong @TOOLTIPONLYDuration@ giây, đồng thời vĩnh viễn cho hắn @TOOLTIPONLYADPerCast@% Sức Mạnh Công Kích. Năng lượng tối đa của hắn được giảm đi @ManaReduction@.",
                "effects": {
                    "ManaReduction": 50,
                    "TOOLTIPONLYADPerCast": 1.5,
                    "TOOLTIPONLYAS": 140,
                    "TOOLTIPONLYDuration": 5
                }
            },
            "_key": "TFT13_Augment_TrundleCarry",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Trundle-Hero-I.png"
        },
        {
            "apiName": "TFT13_Augment_AmbusherCrown",
            "associatedTraits": [
                "TFT13_Ambusher"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Phục Kích, 1 Bàn Tay Công Lý và 1 Camille.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Ambusher_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Phục Kích",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Phục Kích, 1 Bàn Tay Công Lý và 1 Camille.",
                "effects": {}
            },
            "_key": "TFT13_Augment_AmbusherCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Ambusher_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_TeamupAugment_Menaces",
            "associatedTraits": [
                "TFT13_Family",
                "TFT13_Infused",
                "TFT13_Ambusher",
                "TFT13_Scrap"
            ],
            "composition": [],
            "desc": "Khi được triển khai cùng Silco, Powder nhận thêm tộc hệ Thống Trị, nhưng không còn hưởng lợi từ Gia Đình. Khi khỉ của cô phát nổ, nó tạo ra 3 con quái vật của Silco.<br><br>Nhận 1 Powder 2 sao và 1 Silco.",
            "effects": {
                "TOOLTIPONLYNumMonstrosities": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TeamUp_Menaces_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tộc Hệ: Đe Dọa",
            "unique": false,
            "org": {
                "desc": "Khi được triển khai cùng Silco, Powder nhận thêm tộc hệ Thống Trị, nhưng không còn hưởng lợi từ Gia Đình. Khi khỉ của cô phát nổ, nó tạo ra @TOOLTIPONLYNumMonstrosities@ con quái vật của Silco.<br><br>Nhận 1 Powder 2 sao và 1 Silco.",
                "effects": {
                    "TOOLTIPONLYNumMonstrosities": 3
                }
            },
            "_key": "TFT13_TeamupAugment_Menaces",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TeamUp_Menaces_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_PitFighter",
            "associatedTraits": [
                "TFT13_Pugilist"
            ],
            "composition": [],
            "desc": "Tướng Võ Sĩ Lồng Sắt nhận vĩnh viễn 2% Sức Mạnh Công Kích nếu họ thua vòng giao tranh trước. Nếu họ thắng, thay vào đó nhận 50 Máu. Nhận 1 Urgot.",
            "effects": {
                "ADPerLoss": 0.014999999664723873,
                "HealthPerWin": 50
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/OnTheRopes_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tập Trung Rèn Luyện",
            "unique": false,
            "org": {
                "desc": "Tướng Võ Sĩ Lồng Sắt nhận vĩnh viễn @ADPerLoss*100@% Sức Mạnh Công Kích nếu họ thua vòng giao tranh trước. Nếu họ thắng, thay vào đó nhận @HealthPerWin@ Máu. Nhận 1 Urgot.",
                "effects": {
                    "ADPerLoss": 0.014999999664723873,
                    "HealthPerWin": 50
                }
            },
            "_key": "TFT13_Augment_PitFighter",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/OnTheRopes_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_IreliaCarry",
            "associatedTraits": [
                "TFT13_Titan",
                "TFT13_Rebel"
            ],
            "composition": [],
            "desc": "Nhận 1 Irelia. Irelia mạnh nhất của bạn được tăng 60% Tốc Độ Đánh, đồng thời nhận một Kỹ Năng mới toanh giúp cô lướt tới giữa 2 mục tiêu, gây sát thương vật lý lên cả hai bọn chúng.",
            "effects": {
                "TOOLTIPBonusAS": 0.6000000238418579
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Irelia-Hero-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vũ Kiếm",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Irelia. Irelia mạnh nhất của bạn được tăng @TOOLTIPBonusAS*100@% Tốc Độ Đánh, đồng thời nhận một Kỹ Năng mới toanh giúp cô lướt tới giữa 2 mục tiêu, gây sát thương vật lý lên cả hai bọn chúng.",
                "effects": {
                    "TOOLTIPBonusAS": 0.6000000238418579
                }
            },
            "_key": "TFT13_Augment_IreliaCarry",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Irelia-Hero-I.png"
        },
        {
            "apiName": "TFT13_TeamupAugment_Mentorship",
            "associatedTraits": [
                "TFT13_Squad",
                "TFT13_Warband",
                "TFT13_Challenger",
                "TFT13_Sniper"
            ],
            "composition": [],
            "desc": "Khi Ambessa tung chiêu, Caitlyn bắn ra một đòn đánh cường hóa vào mục tiêu, gây 200% sát thương. Ambessa nhận được 18% Sức Mạnh Công Kích của Caitlyn.<br><br>Nhận 1 Caitlyn và Ambessa.",
            "effects": {
                "TOOLTIPONLYADSHARE": 18,
                "TOOLTIPONLYCAITAD": 200
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TeamUp_Mentorship_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tộc Hệ: Thiết Quân Luật",
            "unique": false,
            "org": {
                "desc": "Khi Ambessa tung chiêu, Caitlyn bắn ra một đòn đánh cường hóa vào mục tiêu, gây @TOOLTIPONLYCAITAD@% sát thương. Ambessa nhận được @TOOLTIPONLYADSHARE@% Sức Mạnh Công Kích của Caitlyn.<br><br>Nhận 1 Caitlyn và Ambessa.",
                "effects": {
                    "TOOLTIPONLYADSHARE": 18,
                    "TOOLTIPONLYCAITAD": 200
                }
            },
            "_key": "TFT13_TeamupAugment_Mentorship",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TeamUp_Mentorship_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_SentinelCrown",
            "associatedTraits": [
                "TFT13_Titan"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Vệ Binh, 1 Vương Miện Hoàng Gia và 1 Loris.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Sentinel_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Vệ Binh",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Vệ Binh, 1 Vương Miện Hoàng Gia và 1 Loris.",
                "effects": {}
            },
            "_key": "TFT13_Augment_SentinelCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Sentinel_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_AcademyCrest",
            "associatedTraits": [
                "TFT13_Academy"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Học Viện và 1 Leona.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Academy_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Học Viện",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Học Viện và 1 Leona.",
                "effects": {}
            },
            "_key": "TFT13_Augment_AcademyCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Academy_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ArtilleristCrest",
            "associatedTraits": [
                "TFT13_Martialist"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Pháo Binh và 1 Tristana.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Artillerist_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Pháo Binh",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Pháo Binh và 1 Tristana.",
                "effects": {}
            },
            "_key": "TFT13_Augment_ArtilleristCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Artillerist_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_DominatorCrest",
            "associatedTraits": [
                "TFT13_Infused"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thống Trị và 1 Blitzcrank.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Dominator_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Thống Trị",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thống Trị và 1 Blitzcrank.",
                "effects": {}
            },
            "_key": "TFT13_Augment_DominatorCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Dominator_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Rebel",
            "associatedTraits": [
                "TFT13_Rebel"
            ],
            "composition": [],
            "desc": "Khi 4 tướng Nổi Loạn đầu tiên tử trận mỗi giao tranh, triệu hồi một bản sao của chúng với cấp sao giảm 1 và Máu bị giảm đi 400. Nhận 1 Akali và 1 Irelia.",
            "effects": {
                "NumOfUnits": 4,
                "ReducedHealth": 400
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/SymbolOfFreedom_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Sơn Xanh Thành Phố",
            "unique": false,
            "org": {
                "desc": "Khi @NumOfUnits@ tướng Nổi Loạn đầu tiên tử trận mỗi giao tranh, triệu hồi một bản sao của chúng với cấp sao giảm 1 và Máu bị giảm đi @ReducedHealth@. Nhận 1 Akali và 1 Irelia.",
                "effects": {
                    "NumOfUnits": 4,
                    "ReducedHealth": 400
                }
            },
            "_key": "TFT13_Augment_Rebel",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/SymbolOfFreedom_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_AutomataCrest",
            "associatedTraits": [
                "TFT13_Hextech"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Cỗ Máy Tự Động và 1 Nocturne.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Automata_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Cỗ Máy Tự Động",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Cỗ Máy Tự Động và 1 Nocturne.",
                "effects": {}
            },
            "_key": "TFT13_Augment_AutomataCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Automata_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ExperimentCrown",
            "associatedTraits": [
                "TFT13_Experiment"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thí Nghiệm, 1 Huyết Kiếm và 1 Urgot.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown_Experiment_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Thí Nghiệm",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thí Nghiệm, 1 Huyết Kiếm và 1 Urgot.",
                "effects": {}
            },
            "_key": "TFT13_Augment_ExperimentCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown_Experiment_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_Automata",
            "associatedTraits": [
                "TFT13_Hextech"
            ],
            "composition": [],
            "desc": "Khi tướng Cỗ Máy Tự Động bắn ra vụ nổ, chúng bắn thêm một vụ nổ nữa vào kẻ địch ở gần nhất gây 70% lượng sát thương gốc. Nhận 1 Amumu và Nocturne.",
            "effects": {
                "Percentage": 0.699999988079071
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/UnstableCrystals_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Pha Lê Vụn Vỡ",
            "unique": false,
            "org": {
                "desc": "Khi tướng Cỗ Máy Tự Động bắn ra vụ nổ, chúng bắn thêm một vụ nổ nữa vào kẻ địch ở gần nhất gây @Percentage*100@% lượng sát thương gốc. Nhận 1 Amumu và Nocturne.",
                "effects": {
                    "Percentage": 0.699999988079071
                }
            },
            "_key": "TFT13_Augment_Automata",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/UnstableCrystals_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT13_Augment_ScrapCrest",
            "associatedTraits": [
                "TFT13_Scrap"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Tái Chế và 1 Ziggs.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crest_Scrap_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Tái Chế",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Tái Chế và 1 Ziggs.",
                "effects": {}
            },
            "_key": "TFT13_Augment_ScrapCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crest_Scrap_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT11_Augment_Calltochaos",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 phần thưởng mạnh mẽ ngẫu nhiên.<br><br>Phần Thưởng: 0",
            "effects": {
                "Gold": 58,
                "NumEmblems": 5,
                "Rerolls": 40,
                "XP": 64,
                "numtg": 3,
                "{5edfa63d}": 20,
                "{8c58ac06}": 3,
                "{8f15cad2}": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/CallToChaos_III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Triệu Gọi Hỗn Mang",
            "unique": false,
            "org": {
                "desc": "Nhận 1 phần thưởng mạnh mẽ ngẫu nhiên.<br><br>Phần Thưởng: @TFTUnitProperty.item:TFT11_Augment_CallToChaos@",
                "effects": {
                    "Gold": 58,
                    "NumEmblems": 5,
                    "Rerolls": 40,
                    "XP": 64,
                    "numtg": 3,
                    "{5edfa63d}": 20,
                    "{8c58ac06}": 3,
                    "{8f15cad2}": 3
                }
            },
            "_key": "TFT11_Augment_Calltochaos",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/CallToChaos_III.png"
        },
        {
            "apiName": "TFT11_Augment_AtWhatCost",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lập tức tăng lên cấp 6 và nhận 4 XP. Bạn sẽ không còn được chọn những nâng cấp sắp tới.",
            "effects": {
                "Gold": null,
                "Level": 6,
                "XP": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/AtWhatCost_III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cái Giá Phải Trả",
            "unique": false,
            "org": {
                "desc": "Lập tức tăng lên cấp @Level@ và nhận @XP@ XP. Bạn sẽ không còn được chọn những nâng cấp sắp tới.",
                "effects": {
                    "Gold": null,
                    "Level": 6,
                    "XP": 4
                }
            },
            "_key": "TFT11_Augment_AtWhatCost",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/AtWhatCost_III.png"
        },
        {
            "apiName": "TFT_Augment_AllThatShimmersPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Chọn 1 Tạo Tác sinh vàng. Nhận 1 Nam Châm Ma Thuật và 4 vàng.",
            "effects": {
                "ArmoryChoiceCount": 3,
                "GoldGranted": 4,
                "InterestCap": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/All-that-Shimmers-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kim Long Lấp Lánh+",
            "unique": false,
            "org": {
                "desc": "Chọn 1 Tạo Tác sinh vàng. Nhận 1 Nam Châm Ma Thuật và @GoldGranted@ vàng.",
                "effects": {
                    "ArmoryChoiceCount": 3,
                    "GoldGranted": 4,
                    "InterestCap": 5
                }
            },
            "_key": "TFT_Augment_AllThatShimmersPlus",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/All-that-Shimmers-II.png"
        },
        {
            "apiName": "TFT_Augment_ItemCollector2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận 20 Máu. Với mỗi trang bị khác biệt đang mang, đội của bạn được tăng thêm 5 Máu, 2 Sức Mạnh Công Kích và 1.5 Sức Mạnh Phép Thuật.",
            "effects": {
                "AD": 0.014999999664723873,
                "AP": 1.5,
                "BaseHP": 20,
                "Health": 5,
                "{74536db7}": 99
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ItemCollector_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nhà Sưu Tầm Trang Bị II",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận @BaseHP@ Máu. Với mỗi trang bị khác biệt đang mang, đội của bạn được tăng thêm @Health@ Máu, @AD*100@ Sức Mạnh Công Kích và @AP@ Sức Mạnh Phép Thuật.",
                "effects": {
                    "AD": 0.014999999664723873,
                    "AP": 1.5,
                    "BaseHP": 20,
                    "Health": 5,
                    "{74536db7}": 99
                }
            },
            "_key": "TFT_Augment_ItemCollector2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ItemCollector_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_ItemCollector1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận 10 Máu. Với mỗi trang bị khác biệt đang mang, đội của bạn được tăng thêm 2 Máu, 1 Sức Mạnh Công Kích và 1 Sức Mạnh Phép Thuật.",
            "effects": {
                "AD": 0.009999999776482582,
                "AP": 1,
                "BaseHP": 10,
                "Health": 2,
                "{74536db7}": 99
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ItemCollector_I.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nhà Sưu Tầm Trang Bị I",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận @BaseHP@ Máu. Với mỗi trang bị khác biệt đang mang, đội của bạn được tăng thêm @Health@ Máu, @AD*100@ Sức Mạnh Công Kích và @AP@ Sức Mạnh Phép Thuật.",
                "effects": {
                    "AD": 0.009999999776482582,
                    "AP": 1,
                    "BaseHP": 10,
                    "Health": 2,
                    "{74536db7}": 99
                }
            },
            "_key": "TFT_Augment_ItemCollector1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ItemCollector_I.TFT_Set12.png"
        },
        {
            "apiName": "TFT9_Augment_AllThatShimmers",
            "associatedTraits": [],
            "composition": [],
            "desc": "Chọn 1 trang bị Tạo Tác sinh vàng và nhận 1 Nam Châm Ma Thuật.",
            "effects": {
                "ArmoryChoiceCount": 3,
                "InterestCap": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/All-that-Shimmers-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kim Long Lấp Lánh",
            "unique": false,
            "org": {
                "desc": "Chọn 1 trang bị Tạo Tác sinh vàng và nhận 1 Nam Châm Ma Thuật.",
                "effects": {
                    "ArmoryChoiceCount": 3,
                    "InterestCap": 5
                }
            },
            "_key": "TFT9_Augment_AllThatShimmers",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/All-that-Shimmers-II.png"
        },
        {
            "apiName": "TFT6_Augment_TheGoldenEgg",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận một trứng vàng nở ra sau 11 vòng đấu, cho lượng lớn báu vật. Chiến thắng vòng giao tranh người chơi sẽ đẩy nhanh thời gian nở trứng thêm một vòng.",
            "effects": {
                "EggTurns": 11,
                "-": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/The-Golden-Egg-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Rồng Đẻ Trứng Vàng",
            "unique": false,
            "org": {
                "desc": "Nhận một trứng vàng nở ra sau @EggTurns@ vòng đấu, cho lượng lớn báu vật. Chiến thắng vòng giao tranh người chơi sẽ đẩy nhanh thời gian nở trứng thêm một vòng.",
                "effects": {
                    "EggTurns": 11,
                    "{ecb4463d}": null
                }
            },
            "_key": "TFT6_Augment_TheGoldenEgg",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/The-Golden-Egg-III.png"
        },
        {
            "apiName": "TFT_Augment_SuperstarsSilver",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn gây thêm 5% sát thương, tăng thêm 2% với mỗi tướng 3 sao trong đội hình. Nhận 2 lượt đổi.<br><br>Thưởng Nhận Được: 0%",
            "effects": {
                "BaseBonusDamage": 0.05000000074505806,
                "BonusDamagePer3Star": 0.019999999552965164,
                "Rerolls": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/SuperStars_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đội Hình Siêu Sao I",
            "unique": false,
            "org": {
                "desc": "Đội của bạn gây thêm @BaseBonusDamage*100@% sát thương, tăng thêm @BonusDamagePer3Star*100@% với mỗi tướng 3 sao trong đội hình. Nhận @Rerolls@ lượt đổi.<br><br>Thưởng Nhận Được: @TFTUnitProperty.item:TFT_Augment_SuperstarsTotalDamageBonus@%",
                "effects": {
                    "BaseBonusDamage": 0.05000000074505806,
                    "BonusDamagePer3Star": 0.019999999552965164,
                    "Rerolls": 2
                }
            },
            "_key": "TFT_Augment_SuperstarsSilver",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/SuperStars_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_FiresalePlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi vòng đấu, đánh cắp 1 tướng ngẫu nhiên giá 3 vàng hoặc thấp hơn từ cửa hàng. Nhận 1 vàng.",
            "effects": {
                "Gold": 1,
                "CostLimit": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Firesale_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thanh Lý Toàn Bộ",
            "unique": false,
            "org": {
                "desc": "Mỗi vòng đấu, đánh cắp 1 tướng ngẫu nhiên giá @CostLimit@ vàng hoặc thấp hơn từ cửa hàng. Nhận @Gold@ vàng.",
                "effects": {
                    "Gold": 1,
                    "{6d0c516b}": 3
                }
            },
            "_key": "TFT_Augment_FiresalePlus",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Firesale_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_ArmyBuilding",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Máy Sao Chép Tướng Cỡ Nhỏ. Nhận thêm 1 Máy Sao Chép Tướng Cỡ Nhỏ nữa sau 5 vòng giao tranh người chơi.<br><br><rules>Trang bị này cho phép bạn sao chép một tướng 3 vàng trở xuống.</rules>",
            "effects": {
                "PlayerCombatNum": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Building-an-army-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Xây Dựng Đội Hình",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Máy Sao Chép Tướng Cỡ Nhỏ. Nhận thêm 1 Máy Sao Chép Tướng Cỡ Nhỏ nữa sau @PlayerCombatNum@ vòng giao tranh người chơi.<br><br><rules>Trang bị này cho phép bạn sao chép một tướng 3 vàng trở xuống.</rules>",
                "effects": {
                    "PlayerCombatNum": 5
                }
            },
            "_key": "TFT9_Augment_ArmyBuilding",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Building-an-army-I.png"
        },
        {
            "apiName": "TFT9_Augment_TiniestTitan",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 máu linh thú và 1 vàng sau mỗi vòng giao tranh người chơi. Linh Thú của bạn cũng sẽ di chuyển nhanh hơn.",
            "effects": {
                "Gold": 1,
                "Heal": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tiniest-TitanIII.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Khổng Lồ Tí Hon",
            "unique": false,
            "org": {
                "desc": "Nhận @Heal@ máu linh thú và @Gold@ vàng sau mỗi vòng giao tranh người chơi. Linh Thú của bạn cũng sẽ di chuyển nhanh hơn.",
                "effects": {
                    "Gold": 1,
                    "Heal": 2
                }
            },
            "_key": "TFT9_Augment_TiniestTitan",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Tiniest-TitanIII.png"
        },
        {
            "apiName": "TFT9_Augment_YoungAndWildAndFree",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bạn sẽ luôn được di chuyển tự do trong Vòng Đi Chợ. Nhận 5 vàng.",
            "effects": {
                "Gold": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Young-and-wild-and-free-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Trẻ, Khỏe & Tự Do",
            "unique": false,
            "org": {
                "desc": "Bạn sẽ luôn được di chuyển tự do trong Vòng Đi Chợ. Nhận @Gold@ vàng.",
                "effects": {
                    "Gold": 5
                }
            },
            "_key": "TFT9_Augment_YoungAndWildAndFree",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Young-and-wild-and-free-I.png"
        },
        {
            "apiName": "TFT_Augment_TacticiansKitchen",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Ấn ngẫu nhiên. Sau 3 vòng giao tranh người chơi, nhận 1 Áo Choàng Chiến Thuật.",
            "effects": {
                "NumFryingPan": 1,
                "NumItemAnvils": 1,
                "NumSpatula": 1,
                "TurnDelay": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TacticiansKitchen_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Linh Thú Vào Bếp",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn ngẫu nhiên. Sau @TurnDelay@ vòng giao tranh người chơi, nhận 1 Áo Choàng Chiến Thuật.",
                "effects": {
                    "NumFryingPan": 1,
                    "NumItemAnvils": 1,
                    "NumSpatula": 1,
                    "{26feafbd}": 3
                }
            },
            "_key": "TFT_Augment_TacticiansKitchen",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TacticiansKitchen_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_SupportMiningPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Hình Nhân. Khi nó bị tiêu diệt 5 lần, nhận 1 Trang Bị Hỗ Trợ ngẫu nhiên và loại bỏ Hình Nhân này.",
            "effects": {
                "NumDeaths": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Support-Mining-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chờ Nhận Hỗ Trợ+",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Hình Nhân. Khi nó bị tiêu diệt @NumDeaths@ lần, nhận 1 Trang Bị Hỗ Trợ ngẫu nhiên và loại bỏ Hình Nhân này.",
                "effects": {
                    "NumDeaths": 5
                }
            },
            "_key": "TFT_Augment_SupportMiningPlus",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Support-Mining-I.png"
        },
        {
            "apiName": "TFT10_Augment_CrownGuarded",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Vương Miện Hoàng Gia. Hiệu ứng khởi đầu giao tranh của Vương Miện Hoàng Gia mạnh hơn 100% và lớp lá chắn sẽ tồn tại thêm 5 giây.",
            "effects": {
                "DurationIncrease": 5,
                "effectincrease": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown-Guarded-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Bảo Hộ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Vương Miện Hoàng Gia. Hiệu ứng khởi đầu giao tranh của Vương Miện Hoàng Gia mạnh hơn @effectincrease*100@% và lớp lá chắn sẽ tồn tại thêm @DurationIncrease@ giây.",
                "effects": {
                    "DurationIncrease": 5,
                    "effectincrease": 1
                }
            },
            "_key": "TFT10_Augment_CrownGuarded",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Crown-Guarded-II.png"
        },
        {
            "apiName": "TFT_Augment_Replication",
            "associatedTraits": [],
            "composition": [],
            "desc": "Chọn 1 trong 3 trang bị thành phần. Trong 2 vòng đấu tiếp theo, nhận 1 bản sao của thành phần đó.",
            "effects": {
                "Gold": null,
                "roundsofbonusitems": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Replication-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nhân Bản",
            "unique": false,
            "org": {
                "desc": "Chọn 1 trong 3 trang bị thành phần. Trong @RoundsOfBonusItems@ vòng đấu tiếp theo, nhận 1 bản sao của thành phần đó.",
                "effects": {
                    "Gold": null,
                    "roundsofbonusitems": 2
                }
            },
            "_key": "TFT_Augment_Replication",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Replication-II.png"
        },
        {
            "apiName": "TFT7_Augment_LuckyGlovesPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Găng Đạo Tặc sẽ luôn cho tướng của bạn những trang bị lý tưởng. Nhận 3 Găng Đấu Tập.",
            "effects": {
                "NumGloves": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Lucky-Gloves-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đo Ni Đóng Giày+",
            "unique": false,
            "org": {
                "desc": "Găng Đạo Tặc sẽ luôn cho tướng của bạn những trang bị lý tưởng. Nhận @NumGloves@ Găng Đấu Tập.",
                "effects": {
                    "NumGloves": 3
                }
            },
            "_key": "TFT7_Augment_LuckyGlovesPlus",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Lucky-Gloves-III.png"
        },
        {
            "apiName": "TFT_Augment_OopsAllRageblades",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tất cả các trang bị hoàn chỉnh hiện tại và trong tương lai của bạn sẽ biến đổi thành Cuồng Đao Guinsoo và cho 45 Giáp và Kháng Phép. Mỗi 2 cộng dồn Cuồng Đao sẽ cho 1.5% Sức Mạnh Công Kích và Sức Mạnh Phép Thuật.",
            "effects": {
                "AttacksPerStack": 2,
                "ResistStackValue": 45,
                "StackValue": 1.5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/OopsAllRageblades_III.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nóng Tính",
            "unique": false,
            "org": {
                "desc": "Tất cả các trang bị hoàn chỉnh hiện tại và trong tương lai của bạn sẽ biến đổi thành Cuồng Đao Guinsoo và cho @ResistStackValue@ Giáp và Kháng Phép. Mỗi @AttacksPerStack@ cộng dồn Cuồng Đao sẽ cho @StackValue@% Sức Mạnh Công Kích và Sức Mạnh Phép Thuật.",
                "effects": {
                    "AttacksPerStack": 2,
                    "ResistStackValue": 45,
                    "StackValue": 1.5
                }
            },
            "_key": "TFT_Augment_OopsAllRageblades",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/OopsAllRageblades_III.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_Dummify",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mất đi tất cả tướng trên bàn đấu và trên hàng dự bị của bạn. Nhận 1 Hình Nhân mang 100% tổng Máu của tất cả các tướng đó. Hình Nhân nhận thêm 1000 Máu mỗi giai đoạn.",
            "effects": {
                "HPPerStage": 1000,
                "HealthPercent": 100
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dummify_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hình Nhân Hóa",
            "unique": false,
            "org": {
                "desc": "Mất đi tất cả tướng trên bàn đấu và trên hàng dự bị của bạn. Nhận 1 Hình Nhân mang @HealthPercent@% tổng Máu của tất cả các tướng đó. Hình Nhân nhận thêm @HPPerStage@ Máu mỗi giai đoạn.",
                "effects": {
                    "HPPerStage": 1000,
                    "HealthPercent": 100
                }
            },
            "_key": "TFT_Augment_Dummify",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Dummify_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_PatienceIsAVirtue",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi vòng đấu, nhận 2 lượt đổi miễn phí nếu bạn không mua tướng ở vòng đấu trước.",
            "effects": {
                "FreeRerolls": 2,
                "{4293de94}": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/PatienceIsAVirtue_I.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kiên Nhẫn Là Một Đức Tính",
            "unique": false,
            "org": {
                "desc": "Mỗi vòng đấu, nhận @FreeRerolls@ lượt đổi miễn phí nếu bạn không mua tướng ở vòng đấu trước.",
                "effects": {
                    "FreeRerolls": 2,
                    "{4293de94}": null
                }
            },
            "_key": "TFT_Augment_PatienceIsAVirtue",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/PatienceIsAVirtue_I.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_Dhampyr",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bạn hồi máu bằng 20% sát thương bạn gây lên Linh Thú của đối thủ. Các tướng của bạn nhận 12% Hút Máu Toàn Phần.",
            "effects": {
                "Omnivamp": 0.20000000298023224,
                "OmnivampStatBonus": 0.11999999731779099
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dhampyr_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hút Sinh Lực",
            "unique": false,
            "org": {
                "desc": "Bạn hồi máu bằng @Omnivamp*100@% sát thương bạn gây lên Linh Thú của đối thủ. Các tướng của bạn nhận @OmnivampStatBonus*100@% Hút Máu Toàn Phần.",
                "effects": {
                    "Omnivamp": 0.20000000298023224,
                    "OmnivampStatBonus": 0.11999999731779099
                }
            },
            "_key": "TFT_Augment_Dhampyr",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Dhampyr_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_UnleashTheBeast",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Móng Vuốt Sterak. Khi hiệu ứng của nó kích hoạt, chủ sở hữu nhận thêm 35% Tốc Độ Đánh cho đến hết giao tranh và được miễn nhiễm khống chế trong 5 giây.",
            "effects": {
                "AttackSpeed": 0.3499999940395355,
                "CCImmunityDuration": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/UnleashtheBeast_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Giải Phóng Quái Thú",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Móng Vuốt Sterak. Khi hiệu ứng của nó kích hoạt, chủ sở hữu nhận thêm @AttackSpeed*100@% Tốc Độ Đánh cho đến hết giao tranh và được miễn nhiễm khống chế trong @CCImmunityDuration@ giây.",
                "effects": {
                    "AttackSpeed": 0.3499999940395355,
                    "CCImmunityDuration": 5
                }
            },
            "_key": "TFT_Augment_UnleashTheBeast",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/UnleashtheBeast_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_PowerUp",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nâng Cấp tiếp theo của bạn được tăng một bậc.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/PowerUp_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tăng Cấp",
            "unique": false,
            "org": {
                "desc": "Nâng Cấp tiếp theo của bạn được tăng một bậc.",
                "effects": {}
            },
            "_key": "TFT_Augment_PowerUp",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/PowerUp_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT10_Augment_Scapegoat",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Hình Nhân và 4 vàng. Nếu hình nhân này là đơn vị hy sinh đầu tiên mỗi khi giao tranh với người chơi, nhận 1 vàng.",
            "effects": {
                "Gold": 1,
                "InitialGold": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/The-Scapegoat-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tốt Thí",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Hình Nhân và @initialgold@ vàng. Nếu hình nhân này là đơn vị hy sinh đầu tiên mỗi khi giao tranh với người chơi, nhận @Gold@ vàng.",
                "effects": {
                    "Gold": 1,
                    "InitialGold": 4
                }
            },
            "_key": "TFT10_Augment_Scapegoat",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/The-Scapegoat-II.png"
        },
        {
            "apiName": "TFT9_Augment_MissedConnections",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 bản sao của mỗi tướng Bậc 1.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Missed-Connections-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kết Nối Gián Đoạn",
            "unique": false,
            "org": {
                "desc": "Nhận 1 bản sao của mỗi tướng Bậc 1.",
                "effects": {}
            },
            "_key": "TFT9_Augment_MissedConnections",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Missed-Connections-I.png"
        },
        {
            "apiName": "TFT11_Augment_ScoreboardScrapper",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi vòng, nếu bạn nằm trong nhóm 4 người cuối bảng, đội của bạn nhận thêm vĩnh viễn 2% Sức Mạnh Công Kích và Sức Mạnh Phép Thuật. Nếu bạn nằm trong nhóm 4 người đầu bảng, đội của bạn nhận thêm 10% Máu.",
            "effects": {
                "BottomHalf": 4,
                "LoserBoost": 0.014999999664723873,
                "UpperHalf": 4,
                "WinningStatBoost": 0.10000000149011612
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ScoreboardScrapper_II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Quét Sạch Bảng Điểm",
            "unique": false,
            "org": {
                "desc": "Mỗi vòng, nếu bạn nằm trong nhóm @BottomHalf@ người cuối bảng, đội của bạn nhận thêm vĩnh viễn @LoserBoost*100@% Sức Mạnh Công Kích và Sức Mạnh Phép Thuật. Nếu bạn nằm trong nhóm @UpperHalf@ người đầu bảng, đội của bạn nhận thêm @WinningStatBoost*100@% Máu.",
                "effects": {
                    "BottomHalf": 4,
                    "LoserBoost": 0.014999999664723873,
                    "UpperHalf": 4,
                    "WinningStatBoost": 0.10000000149011612
                }
            },
            "_key": "TFT11_Augment_ScoreboardScrapper",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ScoreboardScrapper_II.png"
        },
        {
            "apiName": "TFT_Augment_RerollTransfer",
            "associatedTraits": [],
            "composition": [],
            "desc": "Với mỗi 1 Lượt Đổi Nâng Cấp chưa sử dụng, nhận 3 lượt đổi cửa hàng miễn phí. Nhận 3 vàng.<br><br><tftitemrules>Không tính vòng đấu mà nâng cấp này được lựa chọn.</tftitemrules>",
            "effects": {
                "AugmentRerollTracked": 1,
                "Gold": 3,
                "ShopRerollToGrant": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Reroll-Transfer-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tận Dụng Lượt Đổi",
            "unique": false,
            "org": {
                "desc": "Với mỗi @AugmentRerollTracked@ Lượt Đổi Nâng Cấp chưa sử dụng, nhận @ShopRerollToGrant@ lượt đổi cửa hàng miễn phí. Nhận @Gold@ vàng.<br><br><tftitemrules>Không tính vòng đấu mà nâng cấp này được lựa chọn.</tftitemrules>",
                "effects": {
                    "AugmentRerollTracked": 1,
                    "Gold": 3,
                    "ShopRerollToGrant": 3
                }
            },
            "_key": "TFT_Augment_RerollTransfer",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Reroll-Transfer-I.png"
        },
        {
            "apiName": "TFT_Augment_BronzeForLife2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận 4% Khuếch Đại Sát Thương và 1% Chống Chịu với mỗi tộc/hệ bậc Đồng.<br><br>Thưởng Khuếch Đại Sát Thương: 0%<br>Thưởng Chống Chịu: 0%",
            "effects": {
                "DamageAmpBonus": 0.03500000014901161,
                "DurabilityBonus": 0.009999999776482582
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BronzeForLife_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tất Tay Bậc Đồng II",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận @DamageAmpBonus*100@% Khuếch Đại Sát Thương và @DurabilityBonus*100@% Chống Chịu với mỗi tộc/hệ bậc Đồng.<br><br>Thưởng Khuếch Đại Sát Thương: @TFTUnitProperty.item:TFT_Augment_BronzeForLife_CurrentDamageAmp@%<br>Thưởng Chống Chịu: @TFTUnitProperty.item:TFT_Augment_BronzeForLife_CurrentDurability@%",
                "effects": {
                    "DamageAmpBonus": 0.03500000014901161,
                    "DurabilityBonus": 0.009999999776482582
                }
            },
            "_key": "TFT_Augment_BronzeForLife2",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BronzeForLife_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_CrownguardSpirit",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Gậy Quá Khổ. Đội của bạn được tăng 10 Sức Mạnh Phép Thuật và 10 Giáp. ",
            "effects": {
                "AP": 10,
                "Armor": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Will-of-the-Crown-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ý Chí Vương Miện",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Gậy Quá Khổ. Đội của bạn được tăng @AP@ Sức Mạnh Phép Thuật và @Armor@ Giáp. ",
                "effects": {
                    "AP": 10,
                    "Armor": 10
                }
            },
            "_key": "TFT_Augment_CrownguardSpirit",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Will-of-the-Crown-II.png"
        },
        {
            "apiName": "TFT_Augment_Trifecta1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 tướng 3 vàng. Bắt đầu giao tranh: 3 tướng 3 vàng ngẫu nhiên nhận thêm 250 Máu và 23% Tốc Độ Đánh.",
            "effects": {
                "AttackSpeed": 0.23000000417232513,
                "BuffedNumber": 3,
                "Health": 250,
                "NumUnits": 2,
                "TeamAttackSpeed": null,
                "Tier": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Trifecta-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bộ Ba Hoàn Hảo I",
            "unique": false,
            "org": {
                "desc": "Nhận @numunits@ tướng @Tier@ vàng. Bắt đầu giao tranh: @BuffedNumber@ tướng @Tier@ vàng ngẫu nhiên nhận thêm @Health@ Máu và @AttackSpeed*100@% Tốc Độ Đánh.",
                "effects": {
                    "AttackSpeed": 0.23000000417232513,
                    "BuffedNumber": 3,
                    "Health": 250,
                    "NumUnits": 2,
                    "TeamAttackSpeed": null,
                    "Tier": 3
                }
            },
            "_key": "TFT_Augment_Trifecta1",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Trifecta-II.png"
        },
        {
            "apiName": "TFT_Augment_SupportMining",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Hình Nhân. Khi nó bị tiêu diệt 7 lần, nhận 1 Trang Bị Hỗ Trợ ngẫu nhiên và loại bỏ Hình Nhân này.",
            "effects": {
                "NumDeaths": 7
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Support-Mining-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chờ Nhận Hỗ Trợ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Hình Nhân. Khi nó bị tiêu diệt @NumDeaths@ lần, nhận 1 Trang Bị Hỗ Trợ ngẫu nhiên và loại bỏ Hình Nhân này.",
                "effects": {
                    "NumDeaths": 7
                }
            },
            "_key": "TFT_Augment_SupportMining",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Support-Mining-I.png"
        },
        {
            "apiName": "TFT_Augment_TombRaider2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 gói trang bị hoàn chỉnh. Mỗi khi một người chơi bị loại, chọn 1 trong các trang bị hoàn chỉnh của họ để giữ lại.",
            "effects": {
                "NumDead": 9,
                "NumInitialItems": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TombRaider_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kẻ Trộm Mộ II",
            "unique": false,
            "org": {
                "desc": "Nhận @NumInitialItems@ gói trang bị hoàn chỉnh. Mỗi khi một người chơi bị loại, chọn 1 trong các trang bị hoàn chỉnh của họ để giữ lại.",
                "effects": {
                    "NumDead": 9,
                    "{7449fd2b}": 1
                }
            },
            "_key": "TFT_Augment_TombRaider2",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TombRaider_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_WealthyRehab2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận 15% Hút Máu Toàn Phần. Nhận thêm 15 vàng khi lần đầu tiên đội của bạn hồi lại tổng cộng 10000 máu tướng.<br><br>Tổng Hồi Máu: 0",
            "effects": {
                "Gold": 15,
                "HealingThreshold": 10000,
                "Omnivamp": 0.15000000596046448
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Health-is-Wealth-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hồi Máu Nhận Tiền II",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận @Omnivamp*100@% Hút Máu Toàn Phần. Nhận thêm @Gold@ vàng khi lần đầu tiên đội của bạn hồi lại tổng cộng @HealingThreshold@ máu tướng.<br><br>Tổng Hồi Máu: @TFTUnitProperty.item:TFT_Augment_WealthyRehabHealing@",
                "effects": {
                    "Gold": 15,
                    "HealingThreshold": 10000,
                    "Omnivamp": 0.15000000596046448
                }
            },
            "_key": "TFT_Augment_WealthyRehab2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Health-is-Wealth-II.png"
        },
        {
            "apiName": "TFT9_Augment_WanderingTrainer",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 6 vàng và 1 Hình Nhân có gắn vĩnh viễn 3 Ấn.",
            "effects": {
                "Gold": 6,
                "NumOfEmblems": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Wandering-Trainer-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hình Nộm Lãng Du II",
            "unique": false,
            "org": {
                "desc": "Nhận @gold@ vàng và 1 Hình Nhân có gắn vĩnh viễn @NumOfEmblems@ Ấn.",
                "effects": {
                    "Gold": 6,
                    "NumOfEmblems": 3
                }
            },
            "_key": "TFT9_Augment_WanderingTrainer",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Wandering-Trainer-III.png"
        },
        {
            "apiName": "TFT_Augment_FlurryOfBlows",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Tụ Bão Zeke. Tướng được cường hóa bởi Zeke đồng thời nhận thêm 45% Tỉ Lệ Chí Mạng.",
            "effects": {
                "CSBonus": 0.44999998807907104
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/FlurryofBlows_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đánh Liên Hoàn",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Tụ Bão Zeke. Tướng được cường hóa bởi Zeke đồng thời nhận thêm @CSBonus*100@% Tỉ Lệ Chí Mạng.",
                "effects": {
                    "CSBonus": 0.44999998807907104
                }
            },
            "_key": "TFT_Augment_FlurryOfBlows",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/FlurryofBlows_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_WealthyRehab1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận 10% Hút Máu Toàn Phần. Nhận thêm 8 vàng khi lần đầu tiên đội của bạn hồi lại tổng cộng 10000 máu tướng.<br><br>Tổng Hồi Máu: 0",
            "effects": {
                "Gold": 8,
                "HealingThreshold": 10000,
                "Omnivamp": 0.10000000149011612
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Health-is-Wealth-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hồi Máu Nhận Tiền I",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận @Omnivamp*100@% Hút Máu Toàn Phần. Nhận thêm @Gold@ vàng khi lần đầu tiên đội của bạn hồi lại tổng cộng @HealingThreshold@ máu tướng.<br><br>Tổng Hồi Máu: @TFTUnitProperty.item:TFT_Augment_WealthyRehabHealing@",
                "effects": {
                    "Gold": 8,
                    "HealingThreshold": 10000,
                    "Omnivamp": 0.10000000149011612
                }
            },
            "_key": "TFT_Augment_WealthyRehab1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Health-is-Wealth-I.png"
        },
        {
            "apiName": "TFT_Augment_PrismaticPipeline",
            "associatedTraits": [],
            "composition": [],
            "desc": "Vòng không phải giao tranh người chơi tiếp theo sẽ cho thêm 1 Hộp Kim Cương chứa đầy báu vật giá trị.",
            "effects": {
                "NumRounds": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/PrismaticPipeline_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Định Hướng Kim Cương",
            "unique": false,
            "org": {
                "desc": "Vòng không phải giao tranh người chơi tiếp theo sẽ cho thêm 1 Hộp Kim Cương chứa đầy báu vật giá trị.",
                "effects": {
                    "NumRounds": 1
                }
            },
            "_key": "TFT_Augment_PrismaticPipeline",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/PrismaticPipeline_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_Trifecta2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 3 tướng 3 vàng. Các đồng minh được tăng 9% Tốc Độ Đánh. Bắt đầu giao tranh: 3 tướng 3 vàng ngẫu nhiên nhận thêm 330 Máu và 33% Tốc Độ Đánh.",
            "effects": {
                "AttackSpeed": 0.33000001311302185,
                "BuffedNumber": 3,
                "Health": 330,
                "NumUnits": 3,
                "TeamAttackSpeed": 0.09000000357627869,
                "Tier": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Trifecta-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bộ Ba Hoàn Hảo II",
            "unique": false,
            "org": {
                "desc": "Nhận @numunits@ tướng @Tier@ vàng. Các đồng minh được tăng @TeamAttackSpeed*100@% Tốc Độ Đánh. Bắt đầu giao tranh: @BuffedNumber@ tướng @Tier@ vàng ngẫu nhiên nhận thêm @Health@ Máu và @AttackSpeed*100@% Tốc Độ Đánh.",
                "effects": {
                    "AttackSpeed": 0.33000001311302185,
                    "BuffedNumber": 3,
                    "Health": 330,
                    "NumUnits": 3,
                    "TeamAttackSpeed": 0.09000000357627869,
                    "Tier": 3
                }
            },
            "_key": "TFT_Augment_Trifecta2",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Trifecta-III.png"
        },
        {
            "apiName": "TFT_Augment_TombRaider1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Với 3 người chơi kế tiếp bị loại, chọn 1 trong các trang bị hoàn chỉnh của họ để giữ lại.",
            "effects": {
                "NumDead": 3,
                "NumInitialItems": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TombRaider_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kẻ Trộm Mộ I",
            "unique": false,
            "org": {
                "desc": "Với @NumDead@ người chơi kế tiếp bị loại, chọn 1 trong các trang bị hoàn chỉnh của họ để giữ lại.",
                "effects": {
                    "NumDead": 3,
                    "{7449fd2b}": null
                }
            },
            "_key": "TFT_Augment_TombRaider1",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TombRaider_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_OneBuffTwoBuff",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Bùa Đỏ, 1 Bùa Xanh và 1 Máy Sao Chép Tướng.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/OneBuffTwoBuff_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Một Bùa, Hai Bùa",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Bùa Đỏ, 1 Bùa Xanh và 1 Máy Sao Chép Tướng.",
                "effects": {}
            },
            "_key": "TFT_Augment_OneBuffTwoBuff",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/OneBuffTwoBuff_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_GlassCannonI",
            "associatedTraits": [],
            "composition": [],
            "desc": "Các tướng bắt đầu giao tranh ở hàng sau sẽ khởi đầu với 90% máu nhưng nhận thêm 15% Khuếch Đại Sát Thương.",
            "effects": {
                "DamageAmp": 0.15000000596046448,
                "Health": 0.8999999761581421
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GlassCannon_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lấy Công Bù Thủ I",
            "unique": false,
            "org": {
                "desc": "Các tướng bắt đầu giao tranh ở hàng sau sẽ khởi đầu với @Health*100@% máu nhưng nhận thêm @DamageAmp*100@% Khuếch Đại Sát Thương.",
                "effects": {
                    "DamageAmp": 0.15000000596046448,
                    "Health": 0.8999999761581421
                }
            },
            "_key": "TFT_Augment_GlassCannonI",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/GlassCannon_I.TFT_Set13.png",
            "balance": 1,
            "diff": {
                "effects": [
                    "DamageAmp%"
                ]
            }
        },
        {
            "apiName": "TFT_Augment_PiercingLotus2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận 20% Tỉ Lệ Chí Mạng và các kỹ năng của họ có thể chí mạng. Đòn chí mạng sẽ gây 20% Cào Xé và Phân Tách lên mục tiêu trong 3 giây.",
            "effects": {
                "CritChance": 20,
                "Duration": 3,
                "ShredSunderPerc": 0.20000000298023224
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Piercing-Lotus-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hoa Sen Xuyên Thấu II",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận @critchance@% Tỉ Lệ Chí Mạng và các kỹ năng của họ có thể chí mạng. Đòn chí mạng sẽ gây @ShredSunderPerc*100@% Cào Xé và Phân Tách lên mục tiêu trong @Duration@ giây.",
                "effects": {
                    "CritChance": 20,
                    "Duration": 3,
                    "ShredSunderPerc": 0.20000000298023224
                }
            },
            "_key": "TFT_Augment_PiercingLotus2",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Piercing-Lotus-III.png"
        },
        {
            "apiName": "TFT_Augment_SatedSpellweaver",
            "associatedTraits": [],
            "composition": [],
            "desc": "Sau khi thi triển một Kỹ Năng, tướng nhận thêm 20% Hút Máu Toàn Phần trong 3 giây. Lượng máu hồi còn thừa sẽ được chuyển thành lá chắn, tối đa 300 Máu.",
            "effects": {
                "Duration": 3,
                "MaxShield": 300,
                "Omnivamp": 0.20000000298023224
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/SatedSpellweaver_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thuật Sư Hút Máu",
            "unique": false,
            "org": {
                "desc": "Sau khi thi triển một Kỹ Năng, tướng nhận thêm @Omnivamp*100@% Hút Máu Toàn Phần trong @Duration@ giây. Lượng máu hồi còn thừa sẽ được chuyển thành lá chắn, tối đa @MaxShield@ Máu.",
                "effects": {
                    "Duration": 3,
                    "MaxShield": 300,
                    "Omnivamp": 0.20000000298023224
                }
            },
            "_key": "TFT_Augment_SatedSpellweaver",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/SatedSpellweaver_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_PiercingLotus1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận 5% Tỉ Lệ Chí Mạng và các kỹ năng của họ có thể chí mạng. Đòn chí mạng sẽ gây 20% Cào Xé và Phân Tách lên mục tiêu trong 3 giây.",
            "effects": {
                "CritChance": 5,
                "Duration": 3,
                "ShredSunderPerc": 0.20000000298023224
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Piercing-Lotus-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hoa Sen Xuyên Thấu I",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận @critchance@% Tỉ Lệ Chí Mạng và các kỹ năng của họ có thể chí mạng. Đòn chí mạng sẽ gây @ShredSunderPerc*100@% Cào Xé và Phân Tách lên mục tiêu trong @Duration@ giây.",
                "effects": {
                    "CritChance": 5,
                    "Duration": 3,
                    "ShredSunderPerc": 0.20000000298023224
                }
            },
            "_key": "TFT_Augment_PiercingLotus1",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Piercing-Lotus-II.png"
        },
        {
            "apiName": "TFT7_Augment_PandorasBench",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 vàng. Ở đầu mỗi vòng đấu, các tướng ở 3 ô ngoài cùng bên phải hàng chờ sẽ được chuyển đổi thành những tướng ngẫu nhiên cùng giá tiền.",
            "effects": {
                "BenchSlots": 3,
                "Gold": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pandoras-Bench-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hàng Chờ Pandora",
            "unique": false,
            "org": {
                "desc": "Nhận @Gold@ vàng. Ở đầu mỗi vòng đấu, các tướng ở @BenchSlots@ ô ngoài cùng bên phải hàng chờ sẽ được chuyển đổi thành những tướng ngẫu nhiên cùng giá tiền.",
                "effects": {
                    "BenchSlots": 3,
                    "Gold": 2
                }
            },
            "_key": "TFT7_Augment_PandorasBench",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Pandoras-Bench-I.png"
        },
        {
            "apiName": "TFT_Augment_Manaflow1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng bắt đầu giao tranh ở hàng sau của bạn nhận được 2 Năng Lượng với mỗi đòn đánh.",
            "effects": {
                "ManaPerAttack": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Manaflow_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Dòng Chảy Năng Lượng I",
            "unique": false,
            "org": {
                "desc": "Tướng bắt đầu giao tranh ở hàng sau của bạn nhận được @ManaPerAttack@ Năng Lượng với mỗi đòn đánh.",
                "effects": {
                    "ManaPerAttack": 2
                }
            },
            "_key": "TFT_Augment_Manaflow1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Manaflow_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_Manaflow2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng bắt đầu giao tranh ở hàng sau của bạn nhận được 4 Năng Lượng với mỗi đòn đánh.",
            "effects": {
                "ManaPerAttack": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Manaflow_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Dòng Chảy Năng Lượng II",
            "unique": false,
            "org": {
                "desc": "Tướng bắt đầu giao tranh ở hàng sau của bạn nhận được @ManaPerAttack@ Năng Lượng với mỗi đòn đánh.",
                "effects": {
                    "ManaPerAttack": 4
                }
            },
            "_key": "TFT_Augment_Manaflow2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Manaflow_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_MaxCap",
            "associatedTraits": [],
            "composition": [],
            "desc": "Cấp tối đa của bạn là 7. Nhận 1 Lá Chắn Chiến Thuật giúp tăng kích cỡ đội hình của bạn thêm +1, kèm thêm 60 vàng.",
            "effects": {
                "AugmentGold": 60,
                "NumItems": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/MaxCap_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Mở Rộng Đội Hình",
            "unique": false,
            "org": {
                "desc": "Cấp tối đa của bạn là 7. Nhận @NumItems@ Lá Chắn Chiến Thuật giúp tăng kích cỡ đội hình của bạn thêm +1, kèm thêm @AugmentGold@ vàng.",
                "effects": {
                    "AugmentGold": 60,
                    "NumItems": 1
                }
            },
            "_key": "TFT_Augment_MaxCap",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/MaxCap_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_UpwardMobility",
            "associatedTraits": [],
            "composition": [],
            "desc": "Giảm 1 vàng khi mua XP. Nhận 2 Máu và 3 lượt đổi miễn phí mỗi khi bạn thăng cấp.",
            "effects": {
                "Health": 2,
                "Rerolls": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/UpwardMobility_III.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đẩy Nhanh Tiến Độ",
            "unique": false,
            "org": {
                "desc": "Giảm 1 vàng khi mua XP. Nhận @Health@ Máu và @Rerolls@ lượt đổi miễn phí mỗi khi bạn thăng cấp.",
                "effects": {
                    "Health": 2,
                    "Rerolls": 3
                }
            },
            "_key": "TFT_Augment_UpwardMobility",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/UpwardMobility_III.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_HallOfMirrors",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt đầu giao tranh: Tất cả tướng ở hàng đầu của bạn trở thành bản sao của tướng đứng chính giữa hàng. Các bản sao sở hữu 100% máu từ tướng gốc và gây ít hơn 40% sát thương.",
            "effects": {
                "DamagePenalty": 0.4000000059604645,
                "HealthRatio": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/HallofMirrors_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Gương Ảo Ảnh",
            "unique": false,
            "org": {
                "desc": "Bắt đầu giao tranh: Tất cả tướng ở hàng đầu của bạn trở thành bản sao của tướng đứng chính giữa hàng. Các bản sao sở hữu @HealthRatio*100@% máu từ tướng gốc và gây ít hơn @DamagePenalty*100@% sát thương.",
                "effects": {
                    "DamagePenalty": 0.4000000059604645,
                    "HealthRatio": 1
                }
            },
            "_key": "TFT_Augment_HallOfMirrors",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/HallofMirrors_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_RiggedShopPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lượt làm mới cửa hàng tiếp theo và mỗi 4 lượt làm mới cửa hàng sẽ cho ra toàn tướng 3 vàng. Nhận 9 lượt đổi.",
            "effects": {
                "Numrolls": 4,
                "Rerolls": 9
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RiggedShop_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cửa Hàng Gian Lận+",
            "unique": false,
            "org": {
                "desc": "Lượt làm mới cửa hàng tiếp theo và mỗi @NumRolls@ lượt làm mới cửa hàng sẽ cho ra toàn tướng 3 vàng. Nhận @Rerolls@ lượt đổi.",
                "effects": {
                    "Numrolls": 4,
                    "Rerolls": 9
                }
            },
            "_key": "TFT_Augment_RiggedShopPlus",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RiggedShop_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_PumpingUp",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lập tức tăng 6% Tốc Độ Đánh cho toàn bộ tướng của bạn. Sau mỗi vòng đấu tiếp theo, tướng nhận thêm 0.5% nữa. (Tốc Độ Đánh hiện tại: 0%)",
            "effects": {
                "BaseAS": 6,
                "IncreasePerRound": 0.5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pumping-Up-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tiếp Sức I",
            "unique": false,
            "org": {
                "desc": "Lập tức tăng @BaseAS@% Tốc Độ Đánh cho toàn bộ tướng của bạn. Sau mỗi vòng đấu tiếp theo, tướng nhận thêm @IncreasePerRound@% nữa. (Tốc Độ Đánh hiện tại: @TFTUnitProperty.item:TFT9_PumpingUpRounds@%)",
                "effects": {
                    "BaseAS": 6,
                    "IncreasePerRound": 0.5
                }
            },
            "_key": "TFT9_Augment_PumpingUp",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Pumping-Up-I.png"
        },
        {
            "apiName": "TFT_Augment_TowerDefense",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Hình Nhân được trang bị một ấn ngẫu nhiên, có thể bắn ra đòn đánh tầm xa vào kẻ địch. Nó sẽ được nâng cấp khi trận đấu kéo dài.",
            "effects": {
                "Gold": null,
                "NumOfEmblems": 1,
                "{103ddd87}": 0.4000000059604645,
                "{fd3dbf9e}": 60
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TowerDefense_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Trụ Phòng Thủ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Hình Nhân được trang bị một ấn ngẫu nhiên, có thể bắn ra đòn đánh tầm xa vào kẻ địch. Nó sẽ được nâng cấp khi trận đấu kéo dài.",
                "effects": {
                    "Gold": null,
                    "NumOfEmblems": 1,
                    "{103ddd87}": 0.4000000059604645,
                    "{fd3dbf9e}": 60
                }
            },
            "_key": "TFT_Augment_TowerDefense",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TowerDefense_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_StarryNightPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng 1 vàng và 2 vàng trong cửa hàng của bạn có xác suất trở thành 2 sao. Nhận 8 vàng.<br><br>Xác Suất Hiện Tại: 0%<br><rules>Xác suất tăng lên theo cấp người chơi.</rules>",
            "effects": {
                "Gold": 8,
                "{019b80fe}": 0.800000011920929,
                "{020fb2eb}": 0.25,
                "{0d14760d}": 2,
                "{4885b8ce}": 1,
                "{49c43705}": 0.20000000298023224,
                "{4abd7204}": 0.18000000715255737,
                "{7083c200}": 0.30000001192092896,
                "{99dcb7a2}": 0.2199999988079071,
                "{ca771d21}": 0.5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/StarryNight_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đêm Đầy Sao+",
            "unique": false,
            "org": {
                "desc": "Tướng 1 vàng và 2 vàng trong cửa hàng của bạn có xác suất trở thành 2 sao. Nhận @Gold@ vàng.<br><br>Xác Suất Hiện Tại: @TFTUnitProperty.item:TFT_Augment_StarryNight_Odds@%<br><rules>Xác suất tăng lên theo cấp người chơi.</rules>",
                "effects": {
                    "Gold": 8,
                    "{019b80fe}": 0.800000011920929,
                    "{020fb2eb}": 0.25,
                    "{0d14760d}": 2,
                    "{4885b8ce}": 1,
                    "{49c43705}": 0.20000000298023224,
                    "{4abd7204}": 0.18000000715255737,
                    "{7083c200}": 0.30000001192092896,
                    "{99dcb7a2}": 0.2199999988079071,
                    "{ca771d21}": 0.5
                }
            },
            "_key": "TFT_Augment_StarryNightPlus",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/StarryNight_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT7_Augment_ClutteredMind",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lập tức nhận 4 tướng 1-vàng ngẫu nhiên. Nếu hàng chờ của bạn đầy khi kết thúc một vòng giao chiến với người chơi, nhận 3 XP. ",
            "effects": {
                "Units": 4,
                "XP": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dizzy-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bừa Bộn",
            "unique": false,
            "org": {
                "desc": "Lập tức nhận @Units@ tướng 1-vàng ngẫu nhiên. Nếu hàng chờ của bạn đầy khi kết thúc một vòng giao chiến với người chơi, nhận @XP@ XP. ",
                "effects": {
                    "Units": 4,
                    "XP": 3
                }
            },
            "_key": "TFT7_Augment_ClutteredMind",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Dizzy-II.png"
        },
        {
            "apiName": "TFT_Augment_HardCommit",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 ấn ngẫu nhiên. Ngay lập tức và khi bắt đầu mỗi giai đoạn, nhận 1 tướng 1 sao cùng tộc/hệ, có giá bằng với Giai Đoạn hiện tại (tối đa 5).",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/HardCommit_III.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chỉ Một Con Đường",
            "unique": false,
            "org": {
                "desc": "Nhận 1 ấn ngẫu nhiên. Ngay lập tức và khi bắt đầu mỗi giai đoạn, nhận 1 tướng 1 sao cùng tộc/hệ, có giá bằng với Giai Đoạn hiện tại (tối đa 5).",
                "effects": {}
            },
            "_key": "TFT_Augment_HardCommit",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/HardCommit_III.TFT_Set12.png"
        },
        {
            "apiName": "TFT9_Augment_BuildingACollectionPlusPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 trang bị thành phần ngẫu nhiên khi bắt đầu 6 vòng tiếp theo (bao gồm cả vòng này).",
            "effects": {
                "Gold": null,
                "roundsofbonusitems": 6
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Buried-Treasures-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kho Báu Chôn Giấu III",
            "unique": false,
            "org": {
                "desc": "Nhận 1 trang bị thành phần ngẫu nhiên khi bắt đầu @roundsofbonusitems@ vòng tiếp theo (bao gồm cả vòng này).",
                "effects": {
                    "Gold": null,
                    "roundsofbonusitems": 6
                }
            },
            "_key": "TFT9_Augment_BuildingACollectionPlusPlus",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Buried-Treasures-III.png"
        },
        {
            "apiName": "TFT_Augment_TableScraps",
            "associatedTraits": [],
            "composition": [],
            "desc": "Sau 3 vòng đi chợ tiếp theo, nhận 1 tướng chưa được nhặt và trang bị của tướng đó. Nhận 1 vàng.",
            "effects": {
                "Gold": 1,
                "NumStages": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TableScraps_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thu Gom Đồ Thừa",
            "unique": false,
            "org": {
                "desc": "Sau @NumStages@ vòng đi chợ tiếp theo, nhận 1 tướng chưa được nhặt và trang bị của tướng đó. Nhận @Gold@ vàng.",
                "effects": {
                    "Gold": 1,
                    "NumStages": 3
                }
            },
            "_key": "TFT_Augment_TableScraps",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TableScraps_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_ClimbTheLadder2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi khi một đồng minh tử trận, các đồng minh có chung ít nhất 1 tộc/hệ với họ sẽ nhận thêm 6 Sức Mạnh Phép Thuật, 6% Sức Mạnh Công Kích, 6 Giáp và 6 Kháng Phép.",
            "effects": {
                "BonusAD": 0.05999999865889549,
                "BonusAP": 6,
                "BonusArmor": 6,
                "BonusMR": 6
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ClimbtheLadder_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Leo Hạng II",
            "unique": false,
            "org": {
                "desc": "Mỗi khi một đồng minh tử trận, các đồng minh có chung ít nhất 1 tộc/hệ với họ sẽ nhận thêm @BonusAP@ Sức Mạnh Phép Thuật, @BonusAD*100@% Sức Mạnh Công Kích, @BonusArmor@ Giáp và @BonusMR@ Kháng Phép.",
                "effects": {
                    "BonusAD": 0.05999999865889549,
                    "BonusAP": 6,
                    "BonusArmor": 6,
                    "BonusMR": 6
                }
            },
            "_key": "TFT_Augment_ClimbTheLadder2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ClimbtheLadder_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_BlindingSpeed",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Diệt Khổng Lồ, Cuồng Đao Guinsoo, 1 Cung Gỗ và 1 Nam Châm Ma Thuật.<br><br><rules>Phù hợp với tướng Chủ Lực Công Kích!</rules>",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Berserk-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tốc Độ Chóng Mặt",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Diệt Khổng Lồ, Cuồng Đao Guinsoo, 1 Cung Gỗ và 1 Nam Châm Ma Thuật.<br><br><rules>Phù hợp với tướng Chủ Lực Công Kích!</rules>",
                "effects": {}
            },
            "_key": "TFT9_Augment_BlindingSpeed",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Berserk-III.png"
        },
        {
            "apiName": "TFT_Augment_ClimbTheLadder1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi khi một đồng minh tử trận, các đồng minh có chung ít nhất 1 tộc/hệ với họ sẽ nhận thêm 3 Sức Mạnh Phép Thuật, 3% Sức Mạnh Công Kích, 3 Giáp và 3 Kháng Phép.",
            "effects": {
                "BonusAD": 0.029999999329447746,
                "BonusAP": 3,
                "BonusArmor": 3,
                "BonusMR": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ClimbtheLadder_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Leo Hạng I",
            "unique": false,
            "org": {
                "desc": "Mỗi khi một đồng minh tử trận, các đồng minh có chung ít nhất 1 tộc/hệ với họ sẽ nhận thêm @BonusAP@ Sức Mạnh Phép Thuật, @BonusAD*100@% Sức Mạnh Công Kích, @BonusArmor@ Giáp và @BonusMR@ Kháng Phép.",
                "effects": {
                    "BonusAD": 0.029999999329447746,
                    "BonusAP": 3,
                    "BonusArmor": 3,
                    "BonusMR": 3
                }
            },
            "_key": "TFT_Augment_ClimbTheLadder1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ClimbtheLadder_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT7_Augment_LuckyGloves",
            "associatedTraits": [],
            "composition": [],
            "desc": "Găng Đạo Tặc sẽ luôn cho tướng của bạn những trang bị lý tưởng. Nhận 2 Găng Đấu Tập. Sau 7 vòng đấu, nhận thêm 1 Găng Đấu Tập.",
            "effects": {
                "NumGloves": 2,
                "NumRounds": 7
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Lucky-Gloves-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đo Ni Đóng Giày",
            "unique": false,
            "org": {
                "desc": "Găng Đạo Tặc sẽ luôn cho tướng của bạn những trang bị lý tưởng. Nhận @NumGloves@ Găng Đấu Tập. Sau @NumRounds@ vòng đấu, nhận thêm 1 Găng Đấu Tập.",
                "effects": {
                    "NumGloves": 2,
                    "NumRounds": 7
                }
            },
            "_key": "TFT7_Augment_LuckyGloves",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Lucky-Gloves-III.png"
        },
        {
            "apiName": "TFT_Augment_DiversifiedPortfolio2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi vòng đấu, nhận 1 vàng với mỗi 3 tộc/hệ không phải duy nhất được kích hoạt.<br>Nhận 4 vàng.<br><br>Vàng Thưởng: 0",
            "effects": {
                "GoldRate": 1,
                "InstantGold": 4,
                "TraitsActive": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/DiversifiedPortfolio1_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đầu Tư Đa Dạng+",
            "unique": false,
            "org": {
                "desc": "Mỗi vòng đấu, nhận @GoldRate@ vàng với mỗi @TraitsActive@ tộc/hệ không phải duy nhất được kích hoạt.<br>Nhận @InstantGold@ vàng.<br><br>Vàng Thưởng: @TFTUnitProperty.item:TFT_Augment_DiversifiedPortfolio_GoldReturned@",
                "effects": {
                    "GoldRate": 1,
                    "InstantGold": 4,
                    "TraitsActive": 3
                }
            },
            "_key": "TFT_Augment_DiversifiedPortfolio2",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/DiversifiedPortfolio1_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_Coronation",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Vương Miện Chiến Thuật. Lá Chắn, Áo Choàng và Vương Miện Chiến Thuật sẽ cho chủ sở hữu thêm 25% Tốc Độ Đánh, 25% Sức Mạnh Công Kích và 35 Sức Mạnh Phép Thuật.",
            "effects": {
                "BonusAD": 0.25,
                "BonusAP": 35,
                "BonusAS": 0.25
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Coronation_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lên Ngôi Vương",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Vương Miện Chiến Thuật. Lá Chắn, Áo Choàng và Vương Miện Chiến Thuật sẽ cho chủ sở hữu thêm @BonusAS*100@% Tốc Độ Đánh, @BonusAD*100@% Sức Mạnh Công Kích và @BonusAP@ Sức Mạnh Phép Thuật.",
                "effects": {
                    "BonusAD": 0.25,
                    "BonusAP": 35,
                    "BonusAS": 0.25
                }
            },
            "_key": "TFT_Augment_Coronation",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Coronation_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_Commander_TeamingUp1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 trang bị thành phần ngẫu nhiên và 2 tướng Bậc 3 ngẫu nhiên.",
            "effects": {
                "NumChamps": 2,
                "NumComponents": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Teaming-Up-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lập Đội I",
            "unique": false,
            "org": {
                "desc": "Nhận @NumComponents@ trang bị thành phần ngẫu nhiên và @NumChamps@ tướng Bậc 3 ngẫu nhiên.",
                "effects": {
                    "NumChamps": 2,
                    "NumComponents": 1
                }
            },
            "_key": "TFT9_Augment_Commander_TeamingUp1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Teaming-Up-I.png"
        },
        {
            "apiName": "TFT_Augment_DiversifiedPortfolio1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi vòng đấu, nhận 1 vàng với mỗi 3 tộc/hệ không phải duy nhất được kích hoạt.<br>Nhận 1 vàng.<br><br>Vàng Thưởng: 0",
            "effects": {
                "GoldRate": 1,
                "InstantGold": 1,
                "TraitsActive": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/DiversifiedPortfolio_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đầu Tư Đa Dạng",
            "unique": false,
            "org": {
                "desc": "Mỗi vòng đấu, nhận @GoldRate@ vàng với mỗi @TraitsActive@ tộc/hệ không phải duy nhất được kích hoạt.<br>Nhận @InstantGold@ vàng.<br><br>Vàng Thưởng: @TFTUnitProperty.item:TFT_Augment_DiversifiedPortfolio_GoldReturned@",
                "effects": {
                    "GoldRate": 1,
                    "InstantGold": 1,
                    "TraitsActive": 3
                }
            },
            "_key": "TFT_Augment_DiversifiedPortfolio1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/DiversifiedPortfolio_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT11_Augment_BloodBank",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bạn sẽ nhận được 2 vàng cho mỗi 8 sát thương bạn gây lên linh thú của đối thủ.<br>(Hiện Tại: 0)",
            "effects": {
                "Damage": 8,
                "Gold": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BloodBank_I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tiền Ăn Trưa",
            "unique": false,
            "org": {
                "desc": "Bạn sẽ nhận được 2 vàng cho mỗi @Damage@ sát thương bạn gây lên linh thú của đối thủ.<br>(Hiện Tại: @TFTUnitProperty.item:TFT11_BloodBankDamage@)",
                "effects": {
                    "Damage": 8,
                    "Gold": 2
                }
            },
            "_key": "TFT11_Augment_BloodBank",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BloodBank_I.png"
        },
        {
            "apiName": "TFT9_Augment_Commander_TeamingUp2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 trang bị Hỗ Trợ ngẫu nhiên và 2 tướng 4-vàng ngẫu nhiên.",
            "effects": {
                "NumComponents": null,
                "NumItems": 1,
                "NumUnits": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Teaming-Up-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lập Đội II",
            "unique": false,
            "org": {
                "desc": "Nhận @NumItems@ trang bị Hỗ Trợ ngẫu nhiên và @NumUnits@ tướng 4-vàng ngẫu nhiên.",
                "effects": {
                    "NumComponents": null,
                    "NumItems": 1,
                    "NumUnits": 2
                }
            },
            "_key": "TFT9_Augment_Commander_TeamingUp2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Teaming-Up-II.png"
        },
        {
            "apiName": "TFT9_Augment_DravenSpoilsOfWar",
            "associatedTraits": [],
            "composition": [],
            "desc": "Kẻ địch có 25% tỉ lệ rớt ra báu vật khi bị tiêu diệt.",
            "effects": {
                "LootDropChance": 0.25,
                "{ac7ef35a}": 0.25
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Spoils-Of-War-Legend-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chiến Lợi Phẩm I",
            "unique": false,
            "org": {
                "desc": "Kẻ địch có @LootDropChance*100@% tỉ lệ rớt ra báu vật khi bị tiêu diệt.",
                "effects": {
                    "LootDropChance": 0.25,
                    "{ac7ef35a}": 0.25
                }
            },
            "_key": "TFT9_Augment_DravenSpoilsOfWar",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Spoils-Of-War-Legend-I.png"
        },
        {
            "apiName": "TFT9_Augment_NotToday",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Áo Choàng Bóng Tối. Tướng mang trang bị này được tăng 35% Tốc Độ Đánh.",
            "effects": {
                "AS": 35
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Not-Today-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Không Phải Hôm Nay",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Áo Choàng Bóng Tối. Tướng mang trang bị này được tăng @AS@% Tốc Độ Đánh.",
                "effects": {
                    "AS": 35
                }
            },
            "_key": "TFT9_Augment_NotToday",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Not-Today-II.png"
        },
        {
            "apiName": "TFT_Augment_WorthTheWaitGold",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 tướng 2 sao 1 vàng ngẫu nhiên. Sau 2 vòng đấu, nhận 1 bản sao của tướng đó khi bắt đầu mỗi vòng đấu cho đến hết trận.<br><br>Tướng: 1",
            "effects": {
                "AdditionalCopies": 99,
                "Delay": 2,
                "UnitTier": 1,
                "{3a9ff59a}": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/WorthTheWait_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chờ Đợi Xứng Đáng",
            "unique": false,
            "org": {
                "desc": "Nhận 1 tướng 2 sao @unittier@ vàng ngẫu nhiên. Sau @delay@ vòng đấu, nhận 1 bản sao của tướng đó khi bắt đầu mỗi vòng đấu cho đến hết trận.<br><br>Tướng: @TFTUnitProperty.item:TFT_Augment_WorthTheWait@",
                "effects": {
                    "AdditionalCopies": 99,
                    "Delay": 2,
                    "UnitTier": 1,
                    "{3a9ff59a}": 3
                }
            },
            "_key": "TFT_Augment_WorthTheWaitGold",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/WorthTheWait_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT6_Augment_ItemGrabBag1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 trang bị hoàn chỉnh ngẫu nhiên.",
            "effects": {
                "NumItems": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ItemGrabBag1.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tiếp Tế Trang Bị I",
            "unique": false,
            "org": {
                "desc": "Nhận @NumItems@ trang bị hoàn chỉnh ngẫu nhiên.",
                "effects": {
                    "NumItems": 1
                }
            },
            "_key": "TFT6_Augment_ItemGrabBag1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ItemGrabBag1.png"
        },
        {
            "apiName": "TFT10_Augment_GoingLong",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bạn sẽ không còn nhận được lợi tức. Nhận ngay 15 vàng. Bắt Đầu Vòng Đấu: nhận 4 ĐKN.<br><br><rules>Lợi tức là lượng vàng bạn nhận được thêm từ mỗi 10 vàng bạn giữ lại.</rules>",
            "effects": {
                "Gold": 15,
                "XP": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Going-Long-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thích Mở Rộng",
            "unique": false,
            "org": {
                "desc": "Bạn sẽ không còn nhận được lợi tức. Nhận ngay @Gold@ vàng. Bắt Đầu Vòng Đấu: nhận @XP@ ĐKN.<br><br><rules>Lợi tức là lượng vàng bạn nhận được thêm từ mỗi 10 vàng bạn giữ lại.</rules>",
                "effects": {
                    "Gold": 15,
                    "XP": 4
                }
            },
            "_key": "TFT10_Augment_GoingLong",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Going-Long-III.png"
        },
        {
            "apiName": "TFT_Augment_ExpectedUnexpectedness",
            "associatedTraits": [],
            "composition": [],
            "desc": "Ngay bây giờ và khi bắt đầu 2 giai đoạn tiếp theo, đổ 3 xúc xắc. Nhận nhiều loại phần thưởng dựa trên tổng số đã đổ được.",
            "effects": {
                "NumStages": 2,
                "{03e061af}": 10,
                "{dae07608}": 20,
                "{fcb8577b}": 15
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Addicted-to-Rolling-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kỳ Vọng Bất Ngờ",
            "unique": false,
            "org": {
                "desc": "Ngay bây giờ và khi bắt đầu @NumStages@ giai đoạn tiếp theo, đổ 3 xúc xắc. Nhận nhiều loại phần thưởng dựa trên tổng số đã đổ được.",
                "effects": {
                    "NumStages": 2,
                    "{03e061af}": 10,
                    "{dae07608}": 20,
                    "{fcb8577b}": 15
                }
            },
            "_key": "TFT_Augment_ExpectedUnexpectedness",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Addicted-to-Rolling-III.png"
        },
        {
            "apiName": "TFT_Augment_PlaceboPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 15 vàng. Đội của bạn được tăng 1% Tốc Độ Đánh.",
            "effects": {
                "AttackSpeed": 0.009999999776482582,
                "Gold": 15
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Placebo_I.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Giả Dược+",
            "unique": false,
            "org": {
                "desc": "Nhận @Gold@ vàng. Đội của bạn được tăng @AttackSpeed*100@% Tốc Độ Đánh.",
                "effects": {
                    "AttackSpeed": 0.009999999776482582,
                    "Gold": 15
                }
            },
            "_key": "TFT_Augment_PlaceboPlus",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Placebo_I.TFT_Set12.png"
        },
        {
            "apiName": "TFT9_Augment_PhreakyFridayPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Tam Luyện Kiếm. Sau 3 vòng giao tranh người chơi, nhận thêm 1 Tam Luyện Kiếm.<br><br><rules>Tam Luyện Kiếm: Tạo Tác giúp tăng mạnh cả chỉ số tấn công và phòng thủ.</rules>",
            "effects": {
                "CombatNum": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Phreaky-Friday-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thứ Sáu Kỳ Quái +",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Tam Luyện Kiếm. Sau @CombatNum@ vòng giao tranh người chơi, nhận thêm 1 Tam Luyện Kiếm.<br><br><rules>Tam Luyện Kiếm: Tạo Tác giúp tăng mạnh cả chỉ số tấn công và phòng thủ.</rules>",
                "effects": {
                    "CombatNum": 3
                }
            },
            "_key": "TFT9_Augment_PhreakyFridayPlus",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Phreaky-Friday-III.png"
        },
        {
            "apiName": "TFT_Augment_SpiritLink1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn hồi lại 6% Máu tối đa của bản thân sau mỗi 4 giây. Tăng lượng hồi máu thêm 0.5% với mỗi 10 máu người chơi đã mất.",
            "effects": {
                "BaseRegenBonus": 0.05999999865889549,
                "RegenPerMissingHP": 0.5,
                "RegenPeriod": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/SpiritLink_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Liên Kết Tâm Linh",
            "unique": false,
            "org": {
                "desc": "Đội của bạn hồi lại @BaseRegenBonus*100@% Máu tối đa của bản thân sau mỗi @RegenPeriod@ giây. Tăng lượng hồi máu thêm @RegenPerMissingHP@% với mỗi 10 máu người chơi đã mất.",
                "effects": {
                    "BaseRegenBonus": 0.05999999865889549,
                    "RegenPerMissingHP": 0.5,
                    "RegenPeriod": 4
                }
            },
            "_key": "TFT_Augment_SpiritLink1",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/SpiritLink_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_IronAssets",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 gói trang bị thành phần và 4 vàng.<br><br><rules>Gói trang bị cho bạn 4 lựa chọn.</rules>",
            "effects": {
                "Gold": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Iron-Assets-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kho Báu Sắt",
            "unique": false,
            "org": {
                "desc": "Nhận 1 gói trang bị thành phần và @Gold@ vàng.<br><br><rules>Gói trang bị cho bạn 4 lựa chọn.</rules>",
                "effects": {
                    "Gold": 4
                }
            },
            "_key": "TFT9_Augment_IronAssets",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Iron-Assets-I.png"
        },
        {
            "apiName": "TFT_Augment_BeggarsCanBeChoosers",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bạn nhận +3 lượt đổi Nâng Cấp cho tất cả các lựa chọn nâng cấp khác. Nhận 7 vàng.",
            "effects": {
                "ExtraRolls": 3,
                "Gold": 7
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BeggarsCanBeChoosers_I.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ai Cũng Có Quyền Chọn Lựa",
            "unique": false,
            "org": {
                "desc": "Bạn nhận +@ExtraRolls@ lượt đổi Nâng Cấp cho tất cả các lựa chọn nâng cấp khác. Nhận @gold@ vàng.",
                "effects": {
                    "ExtraRolls": 3,
                    "Gold": 7
                }
            },
            "_key": "TFT_Augment_BeggarsCanBeChoosers",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BeggarsCanBeChoosers_I.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_BlazingSoul2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt đầu giao tranh: Tướng có Tốc Độ Đánh cao nhất của bạn nhận thêm 45 Sức Mạnh Phép Thuật và 35% Tốc Độ Đánh. Cứ thế lặp lại trên một đồng minh khác sau mỗi 3 giây.",
            "effects": {
                "AbilityPower": 45,
                "AttackSpeed": 0.3499999940395355,
                "TransferDuration": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Blazing-Soul-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Linh Hồn Rực Cháy II",
            "unique": false,
            "org": {
                "desc": "Bắt đầu giao tranh: Tướng có Tốc Độ Đánh cao nhất của bạn nhận thêm @AbilityPower@ Sức Mạnh Phép Thuật và @AttackSpeed*100@% Tốc Độ Đánh. Cứ thế lặp lại trên một đồng minh khác sau mỗi @TransferDuration@ giây.",
                "effects": {
                    "AbilityPower": 45,
                    "AttackSpeed": 0.3499999940395355,
                    "TransferDuration": 3
                }
            },
            "_key": "TFT_Augment_BlazingSoul2",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Blazing-Soul-III.png"
        },
        {
            "apiName": "TFT_Augment_CloningFacility",
            "associatedTraits": [],
            "composition": [],
            "desc": "Cường hóa ô ở chính giữa hàng thứ ba. Triệu hồi 1 bản sao của tướng đứng trên đó với 80% Máu Cơ Bản và 10% Năng Lượng tối đa tăng thêm.",
            "effects": {
                "HealthPercent": 0.800000011920929,
                "ManaPercent": 0.10000000149011612,
                "{4074ec36}": 2,
                "{d47f9a80}": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TrickMirror_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nhà Máy Nhân Bản",
            "unique": false,
            "org": {
                "desc": "Cường hóa ô ở chính giữa hàng thứ ba. Triệu hồi 1 bản sao của tướng đứng trên đó với @HealthPercent*100@% Máu Cơ Bản và @ManaPercent*100@% Năng Lượng tối đa tăng thêm.",
                "effects": {
                    "HealthPercent": 0.800000011920929,
                    "ManaPercent": 0.10000000149011612,
                    "{4074ec36}": 2,
                    "{d47f9a80}": 4
                }
            },
            "_key": "TFT_Augment_CloningFacility",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TrickMirror_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_HedgeFund",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 25 vàng. Lợi tức tối đa được tăng lên 10.<br><br><rules>Lợi tức là lượng vàng bạn nhận được thêm từ mỗi 10 vàng bạn giữ lại.</rules>",
            "effects": {
                "Gold": 25,
                "InterestCap": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RichGetRicher3.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Quỹ Phòng Hộ",
            "unique": false,
            "org": {
                "desc": "Nhận @Gold@ vàng. Lợi tức tối đa được tăng lên @InterestCap@.<br><br><rules>Lợi tức là lượng vàng bạn nhận được thêm từ mỗi 10 vàng bạn giữ lại.</rules>",
                "effects": {
                    "Gold": 25,
                    "InterestCap": 10
                }
            },
            "_key": "TFT9_Augment_HedgeFund",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RichGetRicher3.png"
        },
        {
            "apiName": "TFT_Augment_TwoMuchValue",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 lượt đổi với mỗi 2 tướng 2 vàng khác nhau được triển khai ở giao tranh gần nhất. Nhận 2 tướng 2 vàng.",
            "effects": {
                "FreeRerolls": 1,
                "NumChampsToGrant": 2,
                "UnitCost": 2,
                "UnitCount": 2,
                "augmentselectbonusgold": null,
                "{10307c7b}": null,
                "{d5279bbe}": 2,
                "{e0965628}": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TwoMuchValue_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "2 Vàng Là Nhất",
            "unique": false,
            "org": {
                "desc": "Nhận @FreeRerolls@ lượt đổi với mỗi @UnitCount@ tướng 2 vàng khác nhau được triển khai ở giao tranh gần nhất. Nhận @NumChampsToGrant@ tướng 2 vàng.",
                "effects": {
                    "FreeRerolls": 1,
                    "NumChampsToGrant": 2,
                    "UnitCost": 2,
                    "UnitCount": 2,
                    "augmentselectbonusgold": null,
                    "{10307c7b}": null,
                    "{d5279bbe}": 2,
                    "{e0965628}": 2
                }
            },
            "_key": "TFT_Augment_TwoMuchValue",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TwoMuchValue_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_LongDistanceRelationship2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt đầu giao tranh: Hai tướng cách xa nhau nhất của bạn sẽ kết thân, chia sẻ 22% Giáp, Kháng Phép, Sức Mạnh Công Kích và Sức Mạnh Phép Thuật của mình với tướng còn lại.",
            "effects": {
                "PercentShare": 0.2199999988079071
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Long-Distance-Relationship-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bạn Bè Phương Xa",
            "unique": false,
            "org": {
                "desc": "Bắt đầu giao tranh: Hai tướng cách xa nhau nhất của bạn sẽ kết thân, chia sẻ @PercentShare*100@% Giáp, Kháng Phép, Sức Mạnh Công Kích và Sức Mạnh Phép Thuật của mình với tướng còn lại.",
                "effects": {
                    "PercentShare": 0.2199999988079071
                }
            },
            "_key": "TFT9_Augment_LongDistanceRelationship2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Long-Distance-Relationship-II.png"
        },
        {
            "apiName": "TFT6_Augment_SalvageBin",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận ngay 1 trang bị hoàn chỉnh ngẫu nhiên, và 1 thành phần sau 7 vòng giao tranh người chơi. Bán tướng sẽ tách trang bị hoàn chỉnh của tướng đó ra thành trang bị thành phần (ngoại trừ các trang bị Chiến Thuật và Ấn).",
            "effects": {
                "NumRounds": 7
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Salvage2.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nhà Máy Tái Chế",
            "unique": false,
            "org": {
                "desc": "Nhận ngay 1 trang bị hoàn chỉnh ngẫu nhiên, và 1 thành phần sau @NumRounds@ vòng giao tranh người chơi. Bán tướng sẽ tách trang bị hoàn chỉnh của tướng đó ra thành trang bị thành phần (ngoại trừ các trang bị Chiến Thuật và Ấn).",
                "effects": {
                    "NumRounds": 7
                }
            },
            "_key": "TFT6_Augment_SalvageBin",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Salvage2.png"
        },
        {
            "apiName": "TFT11_Augment_RadiantRefactor",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Nâng Cấp Tuyệt Phẩm và 1 gói trang bị thành phần.<br><br><rules>Nâng Cấp Tuyệt Phẩm nâng cấp một trang bị lên dạng Ánh Sáng!</rules>",
            "effects": {
                "anvils": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RadiantRefactor_III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tái Hiện Thánh Quang",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Nâng Cấp Tuyệt Phẩm và @anvils@ gói trang bị thành phần.<br><br><rules>Nâng Cấp Tuyệt Phẩm nâng cấp một trang bị lên dạng Ánh Sáng!</rules>",
                "effects": {
                    "anvils": 1
                }
            },
            "_key": "TFT11_Augment_RadiantRefactor",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RadiantRefactor_III.png"
        },
        {
            "apiName": "TFT9_Augment_LearningFromExperience2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Sau khi giao chiến với người chơi, nhận thêm 2 XP nếu bạn thắng hoặc 3 XP nếu bạn thua.",
            "effects": {
                "lossxp": 3,
                "winxp": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Learning-From-Experience-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kiên Nhẫn Học Tập",
            "unique": false,
            "org": {
                "desc": "Sau khi giao chiến với người chơi, nhận thêm @winxp@ XP nếu bạn thắng hoặc @lossxp@ XP nếu bạn thua.",
                "effects": {
                    "lossxp": 3,
                    "winxp": 2
                }
            },
            "_key": "TFT9_Augment_LearningFromExperience2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Learning-From-Experience-II.png"
        },
        {
            "apiName": "TFT_Augment_BRB",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bạn không thể hành động trong 3 vòng đấu tiếp theo. Sau đó, nhận 2 gói trang bị hoàn chỉnh.",
            "effects": {
                "RoundsToSkip": 3,
                "anvils": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BRB-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ra Ngoài Một Xíu",
            "unique": false,
            "org": {
                "desc": "Bạn không thể hành động trong @RoundsToSkip@ vòng đấu tiếp theo. Sau đó, nhận @Anvils@ gói trang bị hoàn chỉnh.",
                "effects": {
                    "RoundsToSkip": 3,
                    "anvils": 2
                }
            },
            "_key": "TFT_Augment_BRB",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BRB-II.png"
        },
        {
            "apiName": "TFT11_Augment_Slammin",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Trang Bị Thành Phần ngẫu nhiên. Sau mỗi vòng giao tranh với người chơi, nếu không có trang bị nào của bạn nằm ở hàng dự bị (ngoài các trang bị Tiêu Thụ), nhận 2 XP.",
            "effects": {
                "XP": 2,
                "XPNow": null,
                "components": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Slammin_II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hạ Đo Ván",
            "unique": false,
            "org": {
                "desc": "Nhận @components@ Trang Bị Thành Phần ngẫu nhiên. Sau mỗi vòng giao tranh với người chơi, nếu không có trang bị nào của bạn nằm ở hàng dự bị (ngoài các trang bị Tiêu Thụ), nhận @XP@ XP.",
                "effects": {
                    "XP": 2,
                    "XPNow": null,
                    "components": 1
                }
            },
            "_key": "TFT11_Augment_Slammin",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Slammin_II.png"
        },
        {
            "apiName": "TFT_Augment_BadLuckProtection",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn không còn có thể chí mạng. Chuyển hóa mỗi 1% Tỉ Lệ Chí Mạng thành 1% Sức Mạnh Công Kích. Nhận 1 Găng Đấu Tập.",
            "effects": {
                "ADPerCrit": 0.009999999776482582,
                "CritChancePercent": 1,
                "{1a2d5ea3}": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BadLuckProtection_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bảo Hiểm Rủi Ro",
            "unique": false,
            "org": {
                "desc": "Đội của bạn không còn có thể chí mạng. Chuyển hóa mỗi @CritChancePercent@% Tỉ Lệ Chí Mạng thành @ADPerCrit*100@% Sức Mạnh Công Kích. Nhận 1 Găng Đấu Tập.",
                "effects": {
                    "ADPerCrit": 0.009999999776482582,
                    "CritChancePercent": 1,
                    "{1a2d5ea3}": null
                }
            },
            "_key": "TFT_Augment_BadLuckProtection",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BadLuckProtection_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_InvestmentStrategy2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 5 vàng. Tướng của bạn nhận thêm vĩnh viễn 9 máu tối đa với mỗi vàng lợi tức bạn kiếm được. Lợi tức tối đa của bạn tăng lên thành 7.",
            "effects": {
                "Gold": 5,
                "HealthPerInterest": 9,
                "MaxInterest": 7
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/InvestmentStrategy_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chiến Thuật Đầu Tư II",
            "unique": false,
            "org": {
                "desc": "Nhận @Gold@ vàng. Tướng của bạn nhận thêm vĩnh viễn @HealthPerInterest@ máu tối đa với mỗi vàng lợi tức bạn kiếm được. Lợi tức tối đa của bạn tăng lên thành @MaxInterest@.",
                "effects": {
                    "Gold": 5,
                    "HealthPerInterest": 9,
                    "MaxInterest": 7
                }
            },
            "_key": "TFT_Augment_InvestmentStrategy2",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/InvestmentStrategy_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_BronzeForLifeI",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận 3% Khuếch Đại Sát Thương cho mỗi tộc/hệ bậc Đồng.<br><br>Thưởng Khuếch Đại Sát Thương: 0%",
            "effects": {
                "DamageAmpBonus": 0.029999999329447746,
                "DurabilityBonus": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BronzeForLife_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tất Tay Bậc Đồng I",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận @DamageAmpBonus*100@% Khuếch Đại Sát Thương cho mỗi tộc/hệ bậc Đồng.<br><br>Thưởng Khuếch Đại Sát Thương: @TFTUnitProperty.item:TFT_Augment_BronzeForLife_CurrentDamageAmp@%",
                "effects": {
                    "DamageAmpBonus": 0.029999999329447746,
                    "DurabilityBonus": null
                }
            },
            "_key": "TFT_Augment_BronzeForLifeI",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BronzeForLife_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_InvestmentStrategy1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng của bạn nhận thêm vĩnh viễn 8 máu tối đa với mỗi vàng lợi tức bạn kiếm được.",
            "effects": {
                "HealthPerInterest": 8
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/InvestmentStrategy_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chiến Thuật Đầu Tư I",
            "unique": false,
            "org": {
                "desc": "Tướng của bạn nhận thêm vĩnh viễn @HealthPerInterest@ máu tối đa với mỗi vàng lợi tức bạn kiếm được.",
                "effects": {
                    "HealthPerInterest": 8
                }
            },
            "_key": "TFT_Augment_InvestmentStrategy1",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/InvestmentStrategy_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_Voidborne",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Thông Đạo Zz'Rot và thêm một Thông Đạo nữa sau mỗi 10 giao tranh người chơi. Bọ từ Thông Đạo Zz'Rot được tăng 40% Tốc Độ Đánh và 40% Hút Máu Toàn Phần.",
            "effects": {
                "BonusAS": 0.4000000059604645,
                "BonusOmnivamp": 0.4000000059604645,
                "Numberofcombats": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Void-Swarm-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bầy Bọ Hư Không",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Thông Đạo Zz'Rot và thêm một Thông Đạo nữa sau mỗi @NumberOfCombats@ giao tranh người chơi. Bọ từ Thông Đạo Zz'Rot được tăng @BonusAS*100@% Tốc Độ Đánh và @BonusOmnivamp*100@% Hút Máu Toàn Phần.",
                "effects": {
                    "BonusAS": 0.4000000059604645,
                    "BonusOmnivamp": 0.4000000059604645,
                    "Numberofcombats": 10
                }
            },
            "_key": "TFT_Augment_Voidborne",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Void-Swarm-III.png"
        },
        {
            "apiName": "TFT_Augment_DualPurpose",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lần đầu tiên bạn mua XP mỗi vòng đấu, nhận 2 vàng. Mỗi khi mua XP, làm mới cửa hàng của bạn.",
            "effects": {
                "goldtogive": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/DualPurpose_III.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Một Công Đôi Việc",
            "unique": false,
            "org": {
                "desc": "Lần đầu tiên bạn mua XP mỗi vòng đấu, nhận @goldtogive@ vàng. Mỗi khi mua XP, làm mới cửa hàng của bạn.",
                "effects": {
                    "goldtogive": 2
                }
            },
            "_key": "TFT_Augment_DualPurpose",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/DualPurpose_III.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_HighVoltage",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Nỏ Sét. Nỏ Sét của bạn được +3 ô bán kính tác dụng và gây thêm 25% sát thương.",
            "effects": {
                "effectincrease": 0.25,
                "hexincreasetooltip": 3,
                "{f5a91c3a}": 680
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/HighVoltage_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Sét Cao Thế",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Nỏ Sét. Nỏ Sét của bạn được +@hexincreasetooltip@ ô bán kính tác dụng và gây thêm @effectincrease*100@% sát thương.",
                "effects": {
                    "effectincrease": 0.25,
                    "hexincreasetooltip": 3,
                    "{f5a91c3a}": 680
                }
            },
            "_key": "TFT_Augment_HighVoltage",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/HighVoltage_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_Superstars",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn gây thêm 7% sát thương, tăng thêm 4% với mỗi tướng 3 sao trong đội hình. Nhận 4 lượt đổi.<br><br>Thưởng Nhận Được: 0%",
            "effects": {
                "BaseBonusDamage": 0.07000000029802322,
                "BonusDamagePer3Star": 0.03999999910593033,
                "Rerolls": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/SuperStars_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đội Hình Siêu Sao II",
            "unique": false,
            "org": {
                "desc": "Đội của bạn gây thêm @BaseBonusDamage*100@% sát thương, tăng thêm @BonusDamagePer3Star*100@% với mỗi tướng 3 sao trong đội hình. Nhận @Rerolls@ lượt đổi.<br><br>Thưởng Nhận Được: @TFTUnitProperty.item:TFT_Augment_SuperstarsTotalDamageBonus@%",
                "effects": {
                    "BaseBonusDamage": 0.07000000029802322,
                    "BonusDamagePer3Star": 0.03999999910593033,
                    "Rerolls": 4
                }
            },
            "_key": "TFT_Augment_Superstars",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/SuperStars_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_TwoTrick",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 tướng 2 vàng 2 sao ngẫu nhiên và 2 tướng 1 vàng 2 sao ngẫu nhiên.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Two-Trick-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Số 2 May Mắn",
            "unique": false,
            "org": {
                "desc": "Nhận 1 tướng 2 vàng 2 sao ngẫu nhiên và 2 tướng 1 vàng 2 sao ngẫu nhiên.",
                "effects": {}
            },
            "_key": "TFT_Augment_TwoTrick",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Two-Trick-II.png"
        },
        {
            "apiName": "TFT_Augment_Mentorship1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nếu 1 đồng minh bắt đầu giao tranh kế bên đồng minh có bậc giá cao hơn, nhận thêm 12% Tốc Độ Đánh và 120 Máu.",
            "effects": {
                "AS": 0.11999999731779099,
                "Health": 120
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mentorship-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Dìu Dắt I",
            "unique": false,
            "org": {
                "desc": "Nếu 1 đồng minh bắt đầu giao tranh kế bên đồng minh có bậc giá cao hơn, nhận thêm @AS*100@% Tốc Độ Đánh và @Health@ Máu.",
                "effects": {
                    "AS": 0.11999999731779099,
                    "Health": 120
                }
            },
            "_key": "TFT_Augment_Mentorship1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Mentorship-I.png"
        },
        {
            "apiName": "TFT10_Augment_InspiringEpitaph",
            "associatedTraits": [],
            "composition": [],
            "desc": "Khi một tướng hy sinh, đồng minh gần nhất nhận Lá Chắn bằng 20% Máu tối đa và 10% Tốc Độ Đánh cộng dồn.",
            "effects": {
                "AttackSpeed": 0.10000000149011612,
                "ShieldRatio": 0.20000000298023224
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Inspiring-Epitaph-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Văn Bia Cảm Hứng",
            "unique": false,
            "org": {
                "desc": "Khi một tướng hy sinh, đồng minh gần nhất nhận Lá Chắn bằng @ShieldRatio*100@% Máu tối đa và @AttackSpeed*100@% Tốc Độ Đánh cộng dồn.",
                "effects": {
                    "AttackSpeed": 0.10000000149011612,
                    "ShieldRatio": 0.20000000298023224
                }
            },
            "_key": "TFT10_Augment_InspiringEpitaph",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Inspiring-Epitaph-II.png"
        },
        {
            "apiName": "TFT_Augment_Mentorship2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nếu 1 đồng minh bắt đầu giao tranh kế bên đồng minh có bậc giá cao hơn, nhận thêm 18% Tốc Độ Đánh và 220 Máu.",
            "effects": {
                "AS": 0.18000000715255737,
                "Health": 220
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mentorship-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Dìu Dắt II",
            "unique": false,
            "org": {
                "desc": "Nếu 1 đồng minh bắt đầu giao tranh kế bên đồng minh có bậc giá cao hơn, nhận thêm @AS*100@% Tốc Độ Đánh và @Health@ Máu.",
                "effects": {
                    "AS": 0.18000000715255737,
                    "Health": 220
                }
            },
            "_key": "TFT_Augment_Mentorship2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Mentorship-II.png"
        },
        {
            "apiName": "TFT_Augment_BlazingSoul",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt đầu giao tranh: Tướng có Tốc Độ Đánh cao nhất của bạn nhận thêm 20 Sức Mạnh Phép Thuật và 20% Tốc Độ Đánh. Cứ thế lặp lại trên một đồng minh khác sau mỗi 3 giây.",
            "effects": {
                "AbilityPower": 20,
                "AttackSpeed": 0.20000000298023224,
                "TransferDuration": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Blazing-Soul-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Linh Hồn Rực Cháy I",
            "unique": false,
            "org": {
                "desc": "Bắt đầu giao tranh: Tướng có Tốc Độ Đánh cao nhất của bạn nhận thêm @AbilityPower@ Sức Mạnh Phép Thuật và @AttackSpeed*100@% Tốc Độ Đánh. Cứ thế lặp lại trên một đồng minh khác sau mỗi @TransferDuration@ giây.",
                "effects": {
                    "AbilityPower": 20,
                    "AttackSpeed": 0.20000000298023224,
                    "TransferDuration": 3
                }
            },
            "_key": "TFT_Augment_BlazingSoul",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Blazing-Soul-II.png"
        },
        {
            "apiName": "TFT_Augment_FindYourCenter",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng bắt đầu giao tranh ở chính giữa hàng trên sẽ được nhận 15% Khuếch Đại Sát Thương và 15% Máu tối đa.",
            "effects": {
                "BonusDamage": 0.15000000596046448,
                "BonusHealth": 0.15000000596046448
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/FindYourCenter_I.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tiền Vệ Trung Tâm",
            "unique": false,
            "org": {
                "desc": "Tướng bắt đầu giao tranh ở chính giữa hàng trên sẽ được nhận @BonusDamage*100@% Khuếch Đại Sát Thương và @BonusHealth*100@% Máu tối đa.",
                "effects": {
                    "BonusDamage": 0.15000000596046448,
                    "BonusHealth": 0.15000000596046448
                }
            },
            "_key": "TFT_Augment_FindYourCenter",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/FindYourCenter_I.TFT_Set12.png"
        },
        {
            "apiName": "TFT10_Augment_GoodForSomethingSilver",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng không mang trang bị có 50% tỉ lệ rơi ra 1 vàng khi hy sinh.",
            "effects": {
                "DropChance": 0.5,
                "Gold": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Good-For-Something-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Được Này Mất Kia I",
            "unique": false,
            "org": {
                "desc": "Tướng không mang trang bị có @dropchance*100@% tỉ lệ rơi ra @Gold@ vàng khi hy sinh.",
                "effects": {
                    "DropChance": 0.5,
                    "Gold": 1
                }
            },
            "_key": "TFT10_Augment_GoodForSomethingSilver",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Good-For-Something-I.png"
        },
        {
            "apiName": "TFT8_Augment_SalvageBinPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận ngay 1 trang bị hoàn chỉnh ngẫu nhiên, và 1 thành phần sau 4 vòng giao tranh người chơi. Bán tướng sẽ tách trang bị hoàn chỉnh của tướng đó ra thành trang bị thành phần (ngoại trừ các trang bị Chiến Thuật và Ấn).",
            "effects": {
                "NumRounds": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Salvage2.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nhà Máy Tái Chế+",
            "unique": false,
            "org": {
                "desc": "Nhận ngay 1 trang bị hoàn chỉnh ngẫu nhiên, và 1 thành phần sau @NumRounds@ vòng giao tranh người chơi. Bán tướng sẽ tách trang bị hoàn chỉnh của tướng đó ra thành trang bị thành phần (ngoại trừ các trang bị Chiến Thuật và Ấn).",
                "effects": {
                    "NumRounds": 4
                }
            },
            "_key": "TFT8_Augment_SalvageBinPlus",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Salvage2.png"
        },
        {
            "apiName": "TFT_Augment_ForwardThinking",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mất đi toàn bộ vàng. Sau 5 giao tranh người chơi, nhận lại lượng vàng ban đầu và thêm 70 vàng nữa.<br><br>Vàng Sắp Nhận Được: 0",
            "effects": {
                "BaseGold": 70,
                "rounds": 5,
                "{8f9a1368}": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ForwardThinking_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nghĩ Về Tương Lai",
            "unique": false,
            "org": {
                "desc": "Mất đi toàn bộ vàng. Sau @Rounds@ giao tranh người chơi, nhận lại lượng vàng ban đầu và thêm @BaseGold@ vàng nữa.<br><br>Vàng Sắp Nhận Được: @TFTUnitProperty.item:TFT_Augment_ForwardThinkingGold@",
                "effects": {
                    "BaseGold": 70,
                    "rounds": 5,
                    "{8f9a1368}": 1
                }
            },
            "_key": "TFT_Augment_ForwardThinking",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ForwardThinking_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_Flexible",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Ấn ngẫu nhiên. Khi bắt đầu mỗi Giai Đoạn, nhận 1 Ấn ngẫu nhiên. Đội của bạn nhận 40 Máu với mỗi ấn mà họ đang mang.",
            "effects": {
                "BonusStages": 99,
                "HPPerEmblem": 40,
                "StartingEmblems": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ComponentGrabBag-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Linh Hoạt",
            "unique": false,
            "org": {
                "desc": "Nhận @StartingEmblems@ Ấn ngẫu nhiên. Khi bắt đầu mỗi Giai Đoạn, nhận 1 Ấn ngẫu nhiên. Đội của bạn nhận @HPPerEmblem@ Máu với mỗi ấn mà họ đang mang.",
                "effects": {
                    "BonusStages": 99,
                    "HPPerEmblem": 40,
                    "StartingEmblems": 1
                }
            },
            "_key": "TFT_Augment_Flexible",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ComponentGrabBag-III.png"
        },
        {
            "apiName": "TFT_Augment_RestartMission",
            "associatedTraits": [],
            "composition": [],
            "desc": "Loại bỏ tất cả tướng trên bàn đấu và trên hàng dự bị của bạn. Nhận 2 tướng 3 vàng 2 sao, 3 tướng 2 vàng 2 sao và 1 tướng 1 vàng 2 sao ngẫu nhiên.",
            "effects": {
                "1Cost": 1,
                "2Cost": 3,
                "3Cost": 2,
                "NumUnits": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RestartMission_I.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tái Khởi Động Nhiệm Vụ",
            "unique": false,
            "org": {
                "desc": "Loại bỏ tất cả tướng trên bàn đấu và trên hàng dự bị của bạn. Nhận @3Cost@ tướng 3 vàng 2 sao, @2Cost@ tướng 2 vàng 2 sao và @1Cost@ tướng 1 vàng 2 sao ngẫu nhiên.",
                "effects": {
                    "1Cost": 1,
                    "2Cost": 3,
                    "3Cost": 2,
                    "NumUnits": 2
                }
            },
            "_key": "TFT_Augment_RestartMission",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RestartMission_I.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_DuoQueue",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 tướng 5 vàng ngẫu nhiên và 2 bản sao của 1 trang bị thành phần ngẫu nhiên.",
            "effects": {
                "NumComponents": 2,
                "NumUnits": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/DuoQueue_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hàng Chờ Đấu Đôi",
            "unique": false,
            "org": {
                "desc": "Nhận @NumUnits@ tướng 5 vàng ngẫu nhiên và @NumComponents@ bản sao của 1 trang bị thành phần ngẫu nhiên.",
                "effects": {
                    "NumComponents": 2,
                    "NumUnits": 2
                }
            },
            "_key": "TFT_Augment_DuoQueue",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/DuoQueue_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT6_Augment_Traitless2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Các đơn vị không kích hoạt Tộc/Hệ nhận 300-600 Máu và 45-75% Tốc Độ Đánh (Dựa trên vòng đấu hiện tại)",
            "effects": {
                "AS1": 45,
                "AS2": 55,
                "AS3": 65,
                "AS4": 75,
                "HP1": 300,
                "HP2": 400,
                "HP3": 500,
                "HP4": 600
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BuiltDifferent2.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lối Đi Riêng",
            "unique": false,
            "org": {
                "desc": "Các đơn vị không kích hoạt Tộc/Hệ nhận @HP1@-@HP4@ Máu và @AS1@-@AS4@% Tốc Độ Đánh (Dựa trên vòng đấu hiện tại)",
                "effects": {
                    "AS1": 45,
                    "AS2": 55,
                    "AS3": 65,
                    "AS4": 75,
                    "HP1": 300,
                    "HP2": 400,
                    "HP3": 500,
                    "HP4": 600
                }
            },
            "_key": "TFT6_Augment_Traitless2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BuiltDifferent2.png"
        },
        {
            "apiName": "TFT9_Augment_RedBuff",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đòn đánh từ các tướng của bạn Thiêu Đốt mục tiêu tương đương 5% Máu tối đa của chúng trong 5 giây. Đòn đánh cũng sẽ giảm hồi máu nhận được của mục tiêu đi 33%.",
            "effects": {
                "BurnPercent": 5,
                "Duration": 5,
                "HealingReductionPct": 33
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Red-Buff-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đánh Siêu Rát",
            "unique": false,
            "org": {
                "desc": "Đòn đánh từ các tướng của bạn Thiêu Đốt mục tiêu tương đương @BurnPercent@% Máu tối đa của chúng trong @Duration@ giây. Đòn đánh cũng sẽ giảm hồi máu nhận được của mục tiêu đi @HealingReductionPct@%.",
                "effects": {
                    "BurnPercent": 5,
                    "Duration": 5,
                    "HealingReductionPct": 33
                }
            },
            "_key": "TFT9_Augment_RedBuff",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Red-Buff-I.png"
        },
        {
            "apiName": "TFT11_Augment_Slammin_Plus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 trang bị thành phần ngẫu nhiên và 10 XP ngay. Sau mỗi vòng giao tranh với người chơi, nếu không có trang bị nào của bạn nằm ở hàng dự bị (ngoài các trang bị Tiêu Thụ), nhận 2 XP.",
            "effects": {
                "XP": 2,
                "XPNow": 10,
                "components": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Slammin_II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hạ Đo Ván+",
            "unique": false,
            "org": {
                "desc": "Nhận @components@ trang bị thành phần ngẫu nhiên và @XPNow@ XP ngay. Sau mỗi vòng giao tranh với người chơi, nếu không có trang bị nào của bạn nằm ở hàng dự bị (ngoài các trang bị Tiêu Thụ), nhận @XP@ XP.",
                "effects": {
                    "XP": 2,
                    "XPNow": 10,
                    "components": 1
                }
            },
            "_key": "TFT11_Augment_Slammin_Plus",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Slammin_II.png"
        },
        {
            "apiName": "TFT6_Augment_MaxLevel10",
            "associatedTraits": [],
            "composition": [],
            "desc": "Khi bạn mua XP, nhận thêm 2 XP. Ngay lập tức nhận 12 XP.",
            "effects": {
                "InitialXP": 12,
                "XP": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/LevelUp3.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Khuyến Mãi Kinh Nghiệm",
            "unique": false,
            "org": {
                "desc": "Khi bạn mua XP, nhận thêm @XP@ XP. Ngay lập tức nhận @InitialXP@ XP.",
                "effects": {
                    "InitialXP": 12,
                    "XP": 2
                }
            },
            "_key": "TFT6_Augment_MaxLevel10",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/LevelUp3.png"
        },
        {
            "apiName": "TFT_Augment_AnExaltedAdventure",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 3 tướng 2 vàng. Nếu bạn nâng 2 tướng trong số đó lên 3 sao, nhận 1 hộp báu vật. Nhận 1 Máy Sao Chép Tướng Cỡ Nhỏ khi khởi đầu 2 giai đoạn tiếp theo.",
            "effects": {
                "NumStages": 2,
                "NumUnits": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ExaltedAdventure_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cuộc Phiêu Lưu Tôn Quý",
            "unique": false,
            "org": {
                "desc": "Nhận 3 tướng 2 vàng. Nếu bạn nâng 2 tướng trong số đó lên 3 sao, nhận 1 hộp báu vật. Nhận 1 Máy Sao Chép Tướng Cỡ Nhỏ khi khởi đầu @NumStages@ giai đoạn tiếp theo.",
                "effects": {
                    "NumStages": 2,
                    "NumUnits": 3
                }
            },
            "_key": "TFT_Augment_AnExaltedAdventure",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ExaltedAdventure_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_TraitTracker",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lần đầu tiên bạn kích hoạt được 8 tộc/hệ không phải duy nhất trong 1 vòng giao tranh, nhận 6 Ấn ngẫu nhiên.",
            "effects": {
                "NumEmblems": 6,
                "NumTraits": 8
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TraitTracker_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chơi Hệ Đa Dạng",
            "unique": false,
            "org": {
                "desc": "Lần đầu tiên bạn kích hoạt được @NumTraits@ tộc/hệ không phải duy nhất trong 1 vòng giao tranh, nhận @NumEmblems@ Ấn ngẫu nhiên.",
                "effects": {
                    "NumEmblems": 6,
                    "NumTraits": 8
                }
            },
            "_key": "TFT_Augment_TraitTracker",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TraitTracker_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT6_Augment_OneTwoFive",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 trang bị thành phần ngẫu nhiên, 2 vàng và 1 tướng 5-vàng ngẫu nhiên.",
            "effects": {
                "Gold": 2,
                "NumChamps": 1,
                "NumComponents": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/One-Two-Five-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Một, Hai, Năm!",
            "unique": false,
            "org": {
                "desc": "Nhận @NumComponents@ trang bị thành phần ngẫu nhiên, @Gold@ vàng và @NumChamps@ tướng 5-vàng ngẫu nhiên.",
                "effects": {
                    "Gold": 2,
                    "NumChamps": 1,
                    "NumComponents": 1
                }
            },
            "_key": "TFT6_Augment_OneTwoFive",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/One-Two-Five-I.png"
        },
        {
            "apiName": "TFT9_Augment_SilverSpoon",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 10 XP.<br>",
            "effects": {
                "Experience": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Silver-Spoon-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đặc Quyền Phú Gia",
            "unique": false,
            "org": {
                "desc": "Nhận @Experience@ XP.<br>",
                "effects": {
                    "Experience": 10
                }
            },
            "_key": "TFT9_Augment_SilverSpoon",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Silver-Spoon-I.png"
        },
        {
            "apiName": "TFT_Augment_CalculatedEnhancement",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi giao tranh, 4 tướng ngẫu nhiên ở hai hàng sau của bạn nhận 40% Sức Mạnh Công Kích và 50 Sức Mạnh Phép Thuật.",
            "effects": {
                "BonusAD": 0.4000000059604645,
                "BonusAP": 50,
                "NumUnits": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/CalculatedEnhancement_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cường Hóa Có Tính Toán",
            "unique": false,
            "org": {
                "desc": "Mỗi giao tranh, @NumUnits@ tướng ngẫu nhiên ở hai hàng sau của bạn nhận @BonusAD*100@% Sức Mạnh Công Kích và @BonusAP@ Sức Mạnh Phép Thuật.",
                "effects": {
                    "BonusAD": 0.4000000059604645,
                    "BonusAP": 50,
                    "NumUnits": 4
                }
            },
            "_key": "TFT_Augment_CalculatedEnhancement",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/CalculatedEnhancement_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT11_Augment_EpochPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Ngay lập tức, và khi bắt đầu mỗi giai đoạn, nhận 8 XP và 3 lượt đổi miễn phí.",
            "effects": {
                "Rerolls": 3,
                "XP": 8
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Epoch_II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kỷ Nguyên+",
            "unique": false,
            "org": {
                "desc": "Ngay lập tức, và khi bắt đầu mỗi giai đoạn, nhận @XP@ XP và @Rerolls@ lượt đổi miễn phí.",
                "effects": {
                    "Rerolls": 3,
                    "XP": 8
                }
            },
            "_key": "TFT11_Augment_EpochPlus",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Epoch_II.png"
        },
        {
            "apiName": "TFT_Augment_FinalPolish",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Gói Trang Bị Hỗ Trợ và 1 gói trang bị hoàn chỉnh.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Final-Polish-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tân Trang Lần Cuối",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Gói Trang Bị Hỗ Trợ và 1 gói trang bị hoàn chỉnh.",
                "effects": {}
            },
            "_key": "TFT_Augment_FinalPolish",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Final-Polish-III.png"
        },
        {
            "apiName": "TFT_Augment_Survivor",
            "associatedTraits": [],
            "composition": [],
            "desc": "Sau khi 3 người chơi đã bị loại, nhận 92 vàng.",
            "effects": {
                "Gold": 92,
                "PlayersDead": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Survivor_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kẻ Sống Sót",
            "unique": false,
            "org": {
                "desc": "Sau khi @PlayersDead@ người chơi đã bị loại, nhận @Gold@ vàng.",
                "effects": {
                    "Gold": 92,
                    "PlayersDead": 3
                }
            },
            "_key": "TFT_Augment_Survivor",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Survivor_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_RanduinsImmovableObject",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Khiên Băng Randuin. Tầm tác dụng của nó được tăng thêm 1 ô và hiệu ứng của nó được tăng thêm 50%.",
            "effects": {
                "effectincrease": 0.5,
                "{9f11e38f}": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RanduinsImmovableObject_III.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vật Thể Bất Động",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Khiên Băng Randuin. Tầm tác dụng của nó được tăng thêm 1 ô và hiệu ứng của nó được tăng thêm @effectincrease*100@%.",
                "effects": {
                    "effectincrease": 0.5,
                    "{9f11e38f}": 2
                }
            },
            "_key": "TFT_Augment_RanduinsImmovableObject",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RanduinsImmovableObject_III.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_BeltOverflow",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 5 Đai Khổng Lồ. Đai Khổng Lồ của bạn cho thêm +60 Máu.",
            "effects": {
                "BonusHealth": 60,
                "NumItems": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BeltOverflow_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đam Mê Đai Lưng",
            "unique": false,
            "org": {
                "desc": "Nhận @NumItems@ Đai Khổng Lồ. Đai Khổng Lồ của bạn cho thêm +@BonusHealth@ Máu.",
                "effects": {
                    "BonusHealth": 60,
                    "NumItems": 5
                }
            },
            "_key": "TFT_Augment_BeltOverflow",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BeltOverflow_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_OneTwosThree",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 tướng 1-vàng, 2 tướng 2-vàng và 1 tướng 3-vàng.",
            "effects": {
                "NumChamps": 2,
                "tier1champs": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Threes-Company-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Một, Hai, Ba",
            "unique": false,
            "org": {
                "desc": "Nhận @tier1champs@ tướng 1-vàng, @numchamps@ tướng 2-vàng và 1 tướng 3-vàng.",
                "effects": {
                    "NumChamps": 2,
                    "tier1champs": 2
                }
            },
            "_key": "TFT9_Augment_OneTwosThree",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Threes-Company-I.png"
        },
        {
            "apiName": "TFT9_Augment_SupportCache",
            "associatedTraits": [],
            "composition": [],
            "desc": "Chọn 1 trong 4 trang bị Hỗ Trợ.",
            "effects": {
                "ArmoryChoiceCount": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Support-Cache-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kho Đồ Hỗ Trợ",
            "unique": false,
            "org": {
                "desc": "Chọn 1 trong @ArmoryChoiceCount@ trang bị Hỗ Trợ.",
                "effects": {
                    "ArmoryChoiceCount": 4
                }
            },
            "_key": "TFT9_Augment_SupportCache",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Support-Cache-II.png"
        },
        {
            "apiName": "TFT_Augment_EyeForAnEye",
            "associatedTraits": [],
            "composition": [],
            "desc": "Với mỗi 15 tướng đồng minh tử trận, nhận 1 trang bị thành phần ngẫu nhiên (tối đa 4).<br><br>Số Lần Tử Trận Còn Lại: 0",
            "effects": {
                "AllyDeaths": 15,
                "NumComponents": 4,
                "{a6cb80ca}": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/EyeforanEye_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ăn Miếng Trả Miếng",
            "unique": false,
            "org": {
                "desc": "Với mỗi @AllyDeaths@ tướng đồng minh tử trận, nhận 1 trang bị thành phần ngẫu nhiên (tối đa @NumComponents@).<br><br>Số Lần Tử Trận Còn Lại: @TFTUnitProperty.item:TFT_Augment_EyeForAnEyeDeaths@",
                "effects": {
                    "AllyDeaths": 15,
                    "NumComponents": 4,
                    "{a6cb80ca}": null
                }
            },
            "_key": "TFT_Augment_EyeForAnEye",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/EyeforanEye_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_PhreakyFriday",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Tam Luyện Kiếm. Sau 5 vòng giao tranh người chơi, nhận thêm 1 Tam Luyện Kiếm.<br><br><rules>Tam Luyện Kiếm: Tạo Tác giúp tăng mạnh cả chỉ số tấn công và phòng thủ.</rules>",
            "effects": {
                "CombatNum": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Phreaky-Friday-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thứ Sáu Kỳ Quái",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Tam Luyện Kiếm. Sau @CombatNum@ vòng giao tranh người chơi, nhận thêm 1 Tam Luyện Kiếm.<br><br><rules>Tam Luyện Kiếm: Tạo Tác giúp tăng mạnh cả chỉ số tấn công và phòng thủ.</rules>",
                "effects": {
                    "CombatNum": 5
                }
            },
            "_key": "TFT9_Augment_PhreakyFriday",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Phreaky-Friday-III.png"
        },
        {
            "apiName": "TFT9_Augment_HighEndSector",
            "associatedTraits": [],
            "composition": [],
            "desc": "Khi bạn thăng cấp, nhận số lượt làm mới cửa hàng miễn phí tương đương với cấp của bạn +1. Nhận 4 vàng. ",
            "effects": {
                "Gold": 4,
                "BonusRollPerLevel": 1,
                "{a9ad6d1b}": 8
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Trade3.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tín Đồ Mua Sắm",
            "unique": false,
            "org": {
                "desc": "Khi bạn thăng cấp, nhận số lượt làm mới cửa hàng miễn phí tương đương với cấp của bạn +@BonusRollPerLevel@. Nhận @gold@ vàng. ",
                "effects": {
                    "Gold": 4,
                    "{27797f64}": 1,
                    "{a9ad6d1b}": 8
                }
            },
            "_key": "TFT9_Augment_HighEndSector",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Trade3.png"
        },
        {
            "apiName": "TFT_Augment_CraftedCrafting",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi khi bạn chế tạo 1 trang bị hoàn chỉnh, nhận 2 lượt đổi.",
            "effects": {
                "Rerolls": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/CraftedCrafting_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Khéo Tay Hay Làm",
            "unique": false,
            "org": {
                "desc": "Mỗi khi bạn chế tạo 1 trang bị hoàn chỉnh, nhận @Rerolls@ lượt đổi.",
                "effects": {
                    "Rerolls": 2
                }
            },
            "_key": "TFT_Augment_CraftedCrafting",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/CraftedCrafting_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT11_Augment_RainingGoldPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lập tức nhận 18 vàng và 1 vàng mỗi&nbsp;vòng đấu.",
            "effects": {
                "InstantGold": 18,
                "RoundGold": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RainingGold_II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cơn Mưa Vàng+",
            "unique": false,
            "org": {
                "desc": "Lập tức nhận @InstantGold@ vàng và @RoundGold@ vàng mỗi&nbsp;vòng đấu.",
                "effects": {
                    "InstantGold": 18,
                    "RoundGold": 1
                }
            },
            "_key": "TFT11_Augment_RainingGoldPlus",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RainingGold_II.png"
        },
        {
            "apiName": "TFT9_Augment_CustomerIsAlwaysRight",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi khi nhận 1 trang bị thành phần, nó biến đổi thành gói trang bị thành phần. Nhận 1 trang bị thành phần ngẫu nhiên.<br><br><rules>Gói trang bị cho bạn 4 lựa chọn.</rules>",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/The-customer-is-always-right-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đại Tiệc Trang Bị",
            "unique": false,
            "org": {
                "desc": "Mỗi khi nhận 1 trang bị thành phần, nó biến đổi thành gói trang bị thành phần. Nhận 1 trang bị thành phần ngẫu nhiên.<br><br><rules>Gói trang bị cho bạn 4 lựa chọn.</rules>",
                "effects": {}
            },
            "_key": "TFT9_Augment_CustomerIsAlwaysRight",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/The-customer-is-always-right-I.png"
        },
        {
            "apiName": "TFT11_Augment_Prizefighter",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 trang bị thành phần. Bạn sẽ nhận được 1 trang bị&nbsp;thành phần sau mỗi 5 lần thắng giao tranh.",
            "effects": {
                "WinsNeeded": 5,
                "component": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/PrizeFighter_II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Võ Sĩ Giác Đấu",
            "unique": false,
            "org": {
                "desc": "Nhận @component@ trang bị thành phần. Bạn sẽ nhận được 1 trang bị&nbsp;thành phần sau mỗi @WinsNeeded@ lần thắng giao tranh.",
                "effects": {
                    "WinsNeeded": 5,
                    "component": 2
                }
            },
            "_key": "TFT11_Augment_Prizefighter",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/PrizeFighter_II.png"
        },
        {
            "apiName": "TFT10_Augment_HeroicGrabBag",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 Máy Sao Chép Tướng Cỡ Nhỏ và 9 vàng.<br><br><rules>Trang bị này cho phép bạn sao chép một tướng 3 vàng trở xuống.</rules>",
            "effects": {
                "Gold": 9,
                "LesserDuplicatorAmount": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Heroic-Grab-Bag-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Túi Đồ Siêu Hùng",
            "unique": false,
            "org": {
                "desc": "Nhận @LesserDuplicatorAmount@ Máy Sao Chép Tướng Cỡ Nhỏ và @gold@ vàng.<br><br><rules>Trang bị này cho phép bạn sao chép một tướng 3 vàng trở xuống.</rules>",
                "effects": {
                    "Gold": 9,
                    "LesserDuplicatorAmount": 2
                }
            },
            "_key": "TFT10_Augment_HeroicGrabBag",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Heroic-Grab-Bag-II.png"
        },
        {
            "apiName": "TFT_Augment_InvestedPlusPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 45 vàng. Khi bắt đầu mỗi vòng đấu, nhận 1 lượt làm mới Cửa Hàng với mỗi 10 vàng vượt hơn 50 (tối đa 80 vàng).",
            "effects": {
                "Gold": 45,
                "GoldPerReroll": 10,
                "GoldThreshold": 50,
                "MaxGold": 80
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Invested-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đầu Tư++",
            "unique": false,
            "org": {
                "desc": "Nhận @Gold@ vàng. Khi bắt đầu mỗi vòng đấu, nhận 1 lượt làm mới Cửa Hàng với mỗi @GoldPerReroll@ vàng vượt hơn @GoldThreshold@ (tối đa @MaxGold@ vàng).",
                "effects": {
                    "Gold": 45,
                    "GoldPerReroll": 10,
                    "GoldThreshold": 50,
                    "MaxGold": 80
                }
            },
            "_key": "TFT_Augment_InvestedPlusPlus",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Invested-III.png"
        },
        {
            "apiName": "TFT_Augment_WandOverflow",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 5 Gậy Quá Khổ. Gậy Quá Khổ của bạn sẽ cho +5% Tốc Độ Đánh.",
            "effects": {
                "BonusStat": 0.05000000074505806,
                "NumItems": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/WandOverflow_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đam Mê Gậy",
            "unique": false,
            "org": {
                "desc": "Nhận @NumItems@ Gậy Quá Khổ. Gậy Quá Khổ của bạn sẽ cho +@BonusStat*100@% Tốc Độ Đánh.",
                "effects": {
                    "BonusStat": 0.05000000074505806,
                    "NumItems": 5
                }
            },
            "_key": "TFT_Augment_WandOverflow",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/WandOverflow_III.TFT_Set13.png",
            "balance": 1,
            "diff": {
                "effects": [
                    "BonusStat%"
                ]
            }
        },
        {
            "apiName": "TFT9_Augment_RollTheDice",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Găng Tinh Xảo. Trang bị này sẽ tạo thêm 2 trang bị Ánh Sáng ngẫu nhiên mỗi vòng đấu.<br><br><rules>Trang Bị Ánh Sáng là phiên bản mạnh mẽ hơn của những trang bị hoàn chỉnh.</rules>",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Roll-the-Dice-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lăn Xúc Xắc",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Găng Tinh Xảo. Trang bị này sẽ tạo thêm 2 trang bị Ánh Sáng ngẫu nhiên mỗi vòng đấu.<br><br><rules>Trang Bị Ánh Sáng là phiên bản mạnh mẽ hơn của những trang bị hoàn chỉnh.</rules>",
                "effects": {}
            },
            "_key": "TFT9_Augment_RollTheDice",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Roll-the-Dice-III.png"
        },
        {
            "apiName": "TFT_Augment_GreaterMoonlight",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt Đầu Giao Tranh: 1 tướng 1 vàng ngẫu nhiên được nâng cấp lên 4 sao trong vòng này và nhận thêm 5% Sức Mạnh Công Kích cùng 5 Sức Mạnh Phép Thuật.",
            "effects": {
                "ADBonus": 0.05000000074505806,
                "APBonus": 5,
                "ItemBonus": null,
                "NumUnits": 1,
                "{51b72188}": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GreaterMoonlight_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ánh Trăng Vĩ Đại",
            "unique": false,
            "org": {
                "desc": "Bắt Đầu Giao Tranh: @NumUnits@ tướng 1 vàng ngẫu nhiên được nâng cấp lên 4 sao trong vòng này và nhận thêm @ADBonus*100@% Sức Mạnh Công Kích cùng @APBONUS@ Sức Mạnh Phép Thuật.",
                "effects": {
                    "ADBonus": 0.05000000074505806,
                    "APBonus": 5,
                    "ItemBonus": null,
                    "NumUnits": 1,
                    "{51b72188}": 1
                }
            },
            "_key": "TFT_Augment_GreaterMoonlight",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/GreaterMoonlight_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_AllForOneII",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận thêm 3% Máu tối đa và 2% Khuếch Đại Sát Thương với mỗi tướng 1 vàng khác nhau trên bàn đấu của bạn. Nhận 3 tướng 1 vàng.",
            "effects": {
                "DamageAmp": 0.019999999552965164,
                "Durability": null,
                "NumChampsToGrant": 3,
                "NumCopies": null,
                "PercHP": 0.029999999329447746,
                "Tier": 1,
                "{96f9e378}": null,
                "{d5279bbe}": 1,
                "{ea12e1ed}": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/AllForOne_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Một Cho Tất Cả II",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận thêm @PercHP*100@% Máu tối đa và @DamageAmp*100@% Khuếch Đại Sát Thương với mỗi tướng 1 vàng khác nhau trên bàn đấu của bạn. Nhận @NumChampsToGrant@ tướng 1 vàng.",
                "effects": {
                    "DamageAmp": 0.019999999552965164,
                    "Durability": null,
                    "NumChampsToGrant": 3,
                    "NumCopies": null,
                    "PercHP": 0.029999999329447746,
                    "Tier": 1,
                    "{96f9e378}": null,
                    "{d5279bbe}": 1,
                    "{ea12e1ed}": null
                }
            },
            "_key": "TFT_Augment_AllForOneII",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/AllForOne_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_Lineup",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận 2.5 Giáp và Kháng Phép với mỗi tướng bắt đầu giao tranh ở 2 hàng đầu.",
            "effects": {
                "Resistances": 2.5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Lineup-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tiền Tuyến Vững Chãi",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận @Resistances@ Giáp và Kháng Phép với mỗi tướng bắt đầu giao tranh ở 2 hàng đầu.",
                "effects": {
                    "Resistances": 2.5
                }
            },
            "_key": "TFT_Augment_Lineup",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Lineup-I.png"
        },
        {
            "apiName": "TFT9_Augment_PandorasItems2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt đầu vòng đấu: Các trang bị trên hàng dự bị được đánh tráo ngẫu nhiên.<br><br>Nhận 2 trang bị thành phần ngẫu nhiên.",
            "effects": {
                "NumCompletedItems": null,
                "NumComponents": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pandora2.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Trang Bị Pandora II",
            "unique": false,
            "org": {
                "desc": "Bắt đầu vòng đấu: Các trang bị trên hàng dự bị được đánh tráo ngẫu nhiên.<br><br>Nhận @NumComponents@ trang bị thành phần ngẫu nhiên.",
                "effects": {
                    "NumCompletedItems": null,
                    "NumComponents": 2
                }
            },
            "_key": "TFT9_Augment_PandorasItems2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Pandora2.png"
        },
        {
            "apiName": "TFT_Augment_GlassCannonII",
            "associatedTraits": [],
            "composition": [],
            "desc": "Các tướng bắt đầu giao tranh ở hàng sau sẽ khởi đầu với 90% máu nhưng nhận thêm 25% Khuếch Đại Sát Thương.",
            "effects": {
                "DamageAmp": 0.25,
                "Health": 0.8999999761581421
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GlassCannon_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lấy Công Bù Thủ II",
            "unique": false,
            "org": {
                "desc": "Các tướng bắt đầu giao tranh ở hàng sau sẽ khởi đầu với @Health*100@% máu nhưng nhận thêm @DamageAmp*100@% Khuếch Đại Sát Thương.",
                "effects": {
                    "DamageAmp": 0.25,
                    "Health": 0.8999999761581421
                }
            },
            "_key": "TFT_Augment_GlassCannonII",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/GlassCannon_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT6_Augment_Recombobulator",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tất cả tướng trên sân đấu của bạn sẽ vĩnh viễn chuyển thành tướng ngẫu nhiên với giá cao hơn 1 bậc (tối đa 5). Nhận 2 Nam Châm Ma Thuật.",
            "effects": {
                "NumRemovers": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Recombobulator-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Xoay Bài Tự Động",
            "unique": false,
            "org": {
                "desc": "Tất cả tướng trên sân đấu của bạn sẽ vĩnh viễn chuyển thành tướng ngẫu nhiên với giá cao hơn 1 bậc (tối đa 5). Nhận @NumRemovers@ Nam Châm Ma Thuật.",
                "effects": {
                    "NumRemovers": 2
                }
            },
            "_key": "TFT6_Augment_Recombobulator",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Recombobulator-I.png"
        },
        {
            "apiName": "TFT11_Augment_OverEncumbered",
            "associatedTraits": [],
            "composition": [],
            "desc": "Trong giai đoạn tiếp theo, bạn chỉ có 1 ô dự bị. Sau đó, nhận 3 trang bị&nbsp;thành phần.",
            "effects": {
                "BenchSlots": 1,
                "Gold": null,
                "components": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/OverEncumbered_I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Quá Sức Gánh Vác",
            "unique": false,
            "org": {
                "desc": "Trong giai đoạn tiếp theo, bạn chỉ có @BenchSlots@ ô dự bị. Sau đó, nhận @Components@ trang bị&nbsp;thành phần.",
                "effects": {
                    "BenchSlots": 1,
                    "Gold": null,
                    "components": 3
                }
            },
            "_key": "TFT11_Augment_OverEncumbered",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/OverEncumbered_I.png"
        },
        {
            "apiName": "TFT10_Augment_LittleBuddies",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng 4 vàng và 5 vàng của bạn nhận 65 Máu và 7% Tốc Độ Đánh với mỗi tướng 1 vàng và 2 vàng trên bàn đấu của bạn.",
            "effects": {
                "AttackSpeed": 0.07000000029802322,
                "Health": 65,
                "{0d14760d}": 4,
                "{82aeb8a7}": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Little-Buddies-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Những Người Bạn Nhỏ",
            "unique": false,
            "org": {
                "desc": "Tướng 4 vàng và 5 vàng của bạn nhận @health@ Máu và @AttackSpeed*100@% Tốc Độ Đánh với mỗi tướng 1 vàng và 2 vàng trên bàn đấu của bạn.",
                "effects": {
                    "AttackSpeed": 0.07000000029802322,
                    "Health": 65,
                    "{0d14760d}": 4,
                    "{82aeb8a7}": 2
                }
            },
            "_key": "TFT10_Augment_LittleBuddies",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Little-Buddies-II.png"
        },
        {
            "apiName": "TFT_Augment_Overheal",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi đòn đánh thứ ba gây thêm 150 sát thương vật lý và hồi máu tương đương 50% sát thương. Lượng máu hồi còn thừa sẽ được chuyển thành lá chắn, tối đa 300 Máu.",
            "effects": {
                "BonusDamage": 1.5,
                "Duration": 3,
                "MaxShield": 300,
                "NumAttacks": 3,
                "PercentHeal": 0.5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Overheal_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hồi Máu Vượt Trội",
            "unique": false,
            "org": {
                "desc": "Mỗi đòn đánh thứ ba gây thêm @BonusDamage*100@ sát thương vật lý và hồi máu tương đương @PercentHeal*100@% sát thương. Lượng máu hồi còn thừa sẽ được chuyển thành lá chắn, tối đa @MaxShield@ Máu.",
                "effects": {
                    "BonusDamage": 1.5,
                    "Duration": 3,
                    "MaxShield": 300,
                    "NumAttacks": 3,
                    "PercentHeal": 0.5
                }
            },
            "_key": "TFT_Augment_Overheal",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Overheal_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_ThornPlatedArmor",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Áo Choàng Gai. Áo Choàng Gai của bạn gây thêm 5 - 100% sát thương (tùy vào giai đoạn), đồng thời chủ sở hữu được hồi máu bằng 50% sát thương gây ra.",
            "effects": {
                "DamageAmp1": 0.05000000074505806,
                "DamageAmp2": 0.30000001192092896,
                "DamageAmp3": 0.699999988079071,
                "DamageAmp4": 1,
                "Heal": 0.5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ThornPlatedArmor_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Giáp Gai Thép",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Áo Choàng Gai. Áo Choàng Gai của bạn gây thêm @damageamp1*100@ - @damageamp4*100@% sát thương (tùy vào giai đoạn), đồng thời chủ sở hữu được hồi máu bằng @heal*100@% sát thương gây ra.",
                "effects": {
                    "DamageAmp1": 0.05000000074505806,
                    "DamageAmp2": 0.30000001192092896,
                    "DamageAmp3": 0.699999988079071,
                    "DamageAmp4": 1,
                    "Heal": 0.5
                }
            },
            "_key": "TFT_Augment_ThornPlatedArmor",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ThornPlatedArmor_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT9_Augment_PumpingUp3",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lập tức tăng 16% Tốc Độ Đánh cho toàn bộ tướng của bạn. Sau mỗi vòng đấu tiếp theo, tướng nhận thêm 2% nữa. (Tốc Độ Đánh hiện tại: 0%)",
            "effects": {
                "BaseAS": 16,
                "IncreasePerRound": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pumping-Up-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tiếp Sức III",
            "unique": false,
            "org": {
                "desc": "Lập tức tăng @BaseAS@% Tốc Độ Đánh cho toàn bộ tướng của bạn. Sau mỗi vòng đấu tiếp theo, tướng nhận thêm @IncreasePerRound@% nữa. (Tốc Độ Đánh hiện tại: @TFTUnitProperty.item:TFT9_PumpingUp3Rounds@%)",
                "effects": {
                    "BaseAS": 16,
                    "IncreasePerRound": 2
                }
            },
            "_key": "TFT9_Augment_PumpingUp3",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Pumping-Up-III.png"
        },
        {
            "apiName": "TFT9_Augment_PumpingUp2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lập tức tăng 8% Tốc Độ Đánh cho toàn bộ tướng của bạn. Sau mỗi vòng đấu tiếp theo, tướng nhận thêm 1% nữa. (Tốc Độ Đánh hiện tại: 0%)",
            "effects": {
                "BaseAS": 8,
                "IncreasePerRound": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pumping-Up-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tiếp Sức II",
            "unique": false,
            "org": {
                "desc": "Lập tức tăng @BaseAS@% Tốc Độ Đánh cho toàn bộ tướng của bạn. Sau mỗi vòng đấu tiếp theo, tướng nhận thêm @IncreasePerRound@% nữa. (Tốc Độ Đánh hiện tại: @TFTUnitProperty.item:TFT9_PumpingUp2Rounds@%)",
                "effects": {
                    "BaseAS": 8,
                    "IncreasePerRound": 1
                }
            },
            "_key": "TFT9_Augment_PumpingUp2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Pumping-Up-II.png"
        },
        {
            "apiName": "TFT_Augment_CalledShot",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đặt chuỗi thắng của bạn thành +4. Nhận 4 vàng.",
            "effects": {
                "Gold": 4,
                "Streak": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/CalledShot_I.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đòn Quyết Định",
            "unique": false,
            "org": {
                "desc": "Đặt chuỗi thắng của bạn thành +@Streak@. Nhận @gold@ vàng.",
                "effects": {
                    "Gold": 4,
                    "Streak": 4
                }
            },
            "_key": "TFT_Augment_CalledShot",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/CalledShot_I.TFT_Set12.png"
        },
        {
            "apiName": "TFT9_Augment_WhatDoesntKillYou",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 vàng sau khi thua vòng giao tranh người chơi. Nhận 1 trang bị thành phần ngẫu nhiên mỗi khi thua 4 giao tranh.<br><br><tftitemrules>Số lần thua giao tranh còn lại để nhận trang bị thành phần tiếp theo: 0</tftitemrules>",
            "effects": {
                "Gold": 2,
                "RoundsPerComponent": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/What-Doesn_t-Kill-You-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Khổ Trước Sướng Sau",
            "unique": false,
            "org": {
                "desc": "Nhận @Gold@ vàng sau khi thua vòng giao tranh người chơi. Nhận 1 trang bị thành phần ngẫu nhiên mỗi khi thua @RoundsPerComponent@ giao tranh.<br><br><tftitemrules>Số lần thua giao tranh còn lại để nhận trang bị thành phần tiếp theo: @TFTUnitProperty.item:TFT9_Augment_WhatDoesntKillYou_Counter@</tftitemrules>",
                "effects": {
                    "Gold": 2,
                    "RoundsPerComponent": 4
                }
            },
            "_key": "TFT9_Augment_WhatDoesntKillYou",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/What-Doesn_t-Kill-You-II.png"
        },
        {
            "apiName": "TFT_Augment_EyeForAnEyePlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 trang bị thành phần ngẫu nhiên. Với mỗi 16 tướng đồng minh tử trận, nhận thêm 1 trang bị thành phần nữa (tối đa 3).<br><br>Số Lần Tử Trận Còn Lại: 0",
            "effects": {
                "AllyDeaths": 16,
                "NumComponents": 3,
                "{a6cb80ca}": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/EyeforanEye_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ăn Miếng Trả Miếng+",
            "unique": false,
            "org": {
                "desc": "Nhận 1 trang bị thành phần ngẫu nhiên. Với mỗi @AllyDeaths@ tướng đồng minh tử trận, nhận thêm 1 trang bị thành phần nữa (tối đa @NumComponents@).<br><br>Số Lần Tử Trận Còn Lại: @TFTUnitProperty.item:TFT_Augment_EyeForAnEyeDeaths@",
                "effects": {
                    "AllyDeaths": 16,
                    "NumComponents": 3,
                    "{a6cb80ca}": 1
                }
            },
            "_key": "TFT_Augment_EyeForAnEyePlus",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/EyeforanEye_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_InvestedPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 26 vàng. Khi bắt đầu mỗi vòng đấu, nhận 1 lượt làm mới Cửa Hàng với mỗi 10 vàng vượt hơn 50 (tối đa 80 vàng).",
            "effects": {
                "Gold": 26,
                "GoldPerReroll": 10,
                "GoldThreshold": 50,
                "MaxGold": 80
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Invested-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đầu Tư+",
            "unique": false,
            "org": {
                "desc": "Nhận @Gold@ vàng. Khi bắt đầu mỗi vòng đấu, nhận 1 lượt làm mới Cửa Hàng với mỗi @GoldPerReroll@ vàng vượt hơn @GoldThreshold@ (tối đa @MaxGold@ vàng).",
                "effects": {
                    "Gold": 26,
                    "GoldPerReroll": 10,
                    "GoldThreshold": 50,
                    "MaxGold": 80
                }
            },
            "_key": "TFT_Augment_InvestedPlus",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Invested-III.png"
        },
        {
            "apiName": "TFT_Augment_GhostOfUnitsPast",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi khi tướng đồng minh bị hạ gục, đội hiện tại của bạn và mọi đồng minh trong tương lai nhận vĩnh viễn 7 máu, 1% Sức Mạnh Công Kích hoặc 1 Sức Mạnh Phép Thuật, dựa theo vai trò của tướng bị hạ gục.<br><br><rules>Máu: 5<br>Sức Mạnh Công Kích: 1% <br>Sức Mạnh Phép Thuật: 1 </rules>",
            "effects": {
                "ADPerStack": 0.009999999776482582,
                "APPerStack": 1,
                "HealthPerStack": 7
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GhostofUnitsPast_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Linh Hồn Ban Phước",
            "unique": false,
            "org": {
                "desc": "Mỗi khi tướng đồng minh bị hạ gục, đội hiện tại của bạn và mọi đồng minh trong tương lai nhận vĩnh viễn @HealthPerStack@ máu, @ADPerStack*100@% Sức Mạnh Công Kích hoặc @APPerStack@ Sức Mạnh Phép Thuật, dựa theo vai trò của tướng bị hạ gục.<br><br><rules>Máu: @TFTUnitProperty.Item:TFT_Augment_GhostOfUnitsPast_Health@<br>Sức Mạnh Công Kích: @TFTUnitProperty.Item:TFT_Augment_GhostOfUnitsPast_AD*100@% <br>Sức Mạnh Phép Thuật: @TFTUnitProperty.Item:TFT_Augment_GhostOfUnitsPast_AP@ </rules>",
                "effects": {
                    "ADPerStack": 0.009999999776482582,
                    "APPerStack": 1,
                    "HealthPerStack": 7
                }
            },
            "_key": "TFT_Augment_GhostOfUnitsPast",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/GhostofUnitsPast_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT11_Augment_RainingGold",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lập tức nhận 8 vàng và 1 vàng mỗi&nbsp;vòng đấu.",
            "effects": {
                "InstantGold": 8,
                "RoundGold": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RainingGold_II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cơn Mưa Vàng",
            "unique": false,
            "org": {
                "desc": "Lập tức nhận @InstantGold@ vàng và @RoundGold@ vàng mỗi&nbsp;vòng đấu.",
                "effects": {
                    "InstantGold": 8,
                    "RoundGold": 1
                }
            },
            "_key": "TFT11_Augment_RainingGold",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RainingGold_II.png"
        },
        {
            "apiName": "TFT_Augment_MagicRoll",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đổ 3 xúc xắc. Nhận nhiều loại phần thưởng dựa trên tổng số đã đổ được.<br><br>Phần Thưởng: 0",
            "effects": {
                "EggTurns": 3,
                "NumComponents": 2,
                "{3b0ef232}": 250,
                "{95ed8271}": 3,
                "{9a58ced6}": 4,
                "{b0892e64}": 2,
                "{c726cd82}": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/A-Magical-Roll-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Xúc Xắc Ma Pháp",
            "unique": false,
            "org": {
                "desc": "Đổ 3 xúc xắc. Nhận nhiều loại phần thưởng dựa trên tổng số đã đổ được.<br><br>Phần Thưởng: @TFTUnitProperty.item:TFT_Augment_MagicRoll@",
                "effects": {
                    "EggTurns": 3,
                    "NumComponents": 2,
                    "{3b0ef232}": 250,
                    "{95ed8271}": 3,
                    "{9a58ced6}": 4,
                    "{b0892e64}": 2,
                    "{c726cd82}": 1
                }
            },
            "_key": "TFT_Augment_MagicRoll",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/A-Magical-Roll-II.png"
        },
        {
            "apiName": "TFT_Augment_SwordOverflow",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 5 Kiếm BF. Kiếm BF của bạn sẽ cho +3% Tốc Độ Đánh.",
            "effects": {
                "BonusStat": 0.029999999329447746,
                "NumItems": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BladeOverflow_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đam Mê Kiếm",
            "unique": false,
            "org": {
                "desc": "Nhận @NumItems@ Kiếm BF. Kiếm BF của bạn sẽ cho +@BonusStat*100@% Tốc Độ Đánh.",
                "effects": {
                    "BonusStat": 0.029999999329447746,
                    "NumItems": 5
                }
            },
            "_key": "TFT_Augment_SwordOverflow",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BladeOverflow_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT6_Augment_ClearMind",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nếu không có tướng trong hàng dự bị khi kết thúc giao tranh với người chơi, nhận 3 ĐKN.",
            "effects": {
                "XP": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ClearMind2.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thông Thoáng",
            "unique": false,
            "org": {
                "desc": "Nếu không có tướng trong hàng dự bị khi kết thúc giao tranh với người chơi, nhận @XP@ ĐKN.",
                "effects": {
                    "XP": 3
                }
            },
            "_key": "TFT6_Augment_ClearMind",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ClearMind2.png"
        },
        {
            "apiName": "TFT_Augment_WorthTheWaitPrismatic",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 tướng 2 vàng ngẫu nhiên. Nhận 1 bản sao của tướng đó khi bắt đầu mỗi vòng đấu cho đến hết trận.<br><br>Tướng: 1",
            "effects": {
                "AdditionalCopies": 99,
                "Delay": null,
                "UnitTier": 2,
                "{3a9ff59a}": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/WorthTheWait_III.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chờ Đợi Xứng Đáng II",
            "unique": false,
            "org": {
                "desc": "Nhận 1 tướng @unittier@ vàng ngẫu nhiên. Nhận 1 bản sao của tướng đó khi bắt đầu mỗi vòng đấu cho đến hết trận.<br><br>Tướng: @TFTUnitProperty.item:TFT_Augment_WorthTheWait@",
                "effects": {
                    "AdditionalCopies": 99,
                    "Delay": null,
                    "UnitTier": 2,
                    "{3a9ff59a}": 1
                }
            },
            "_key": "TFT_Augment_WorthTheWaitPrismatic",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/WorthTheWait_III.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_TitanicTitan",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tăng máu hiện tại và máu tối đa của người chơi thêm 25. Ở các vòng đi chợ, bạn được thả ra sớm hơn nhưng di chuyển sẽ chậm hơn.",
            "effects": {
                "Heal": 25
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/TitanicTitan_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Khổng Lồ Ngoại Cỡ",
            "unique": false,
            "org": {
                "desc": "Tăng máu hiện tại và máu tối đa của người chơi thêm @Heal@. Ở các vòng đi chợ, bạn được thả ra sớm hơn nhưng di chuyển sẽ chậm hơn.",
                "effects": {
                    "Heal": 25
                }
            },
            "_key": "TFT_Augment_TitanicTitan",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/TitanicTitan_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_HeadStart",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bán toàn bộ bàn đấu và hàng dự bị của bạn. Nhận 4 tướng 1 vàng 2 sao ngẫu nhiên. Vô hiệu hóa cửa hàng của bạn trong 3 vòng kế tiếp.",
            "effects": {
                "NumUnits": 4,
                "RoundsToSkip": 3,
                "Tier": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/HeadStart_I.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Khởi Đầu Chậm Trễ",
            "unique": false,
            "org": {
                "desc": "Bán toàn bộ bàn đấu và hàng dự bị của bạn. Nhận @NumUnits@ tướng @tier@ vàng 2 sao ngẫu nhiên. Vô hiệu hóa cửa hàng của bạn trong @roundstoskip@ vòng kế tiếp.",
                "effects": {
                    "NumUnits": 4,
                    "RoundsToSkip": 3,
                    "Tier": 1
                }
            },
            "_key": "TFT_Augment_HeadStart",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/HeadStart_I.TFT_Set12.png"
        },
        {
            "apiName": "TFT11_Augment_WanderingTrainerGold",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 vàng và 1 Hình Nhân có gắn vĩnh viễn 2 Ấn.",
            "effects": {
                "Gold": 1,
                "NumOfEmblems": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Wandering-Trainer-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hình Nộm Lãng Du I",
            "unique": false,
            "org": {
                "desc": "Nhận @gold@ vàng và 1 Hình Nhân có gắn vĩnh viễn @NumOfEmblems@ Ấn.",
                "effects": {
                    "Gold": 1,
                    "NumOfEmblems": 2
                }
            },
            "_key": "TFT11_Augment_WanderingTrainerGold",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Wandering-Trainer-II.png"
        },
        {
            "apiName": "TFT9_Augment_Commander_RollingForDays",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 11 lượt đổi Cửa Hàng miễn phí.",
            "effects": {
                "Numrolls": 11
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Rolling-For-Days-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Xúc Xắc Vô Tận I",
            "unique": false,
            "org": {
                "desc": "Nhận @Numrolls@ lượt đổi Cửa Hàng miễn phí.",
                "effects": {
                    "Numrolls": 11
                }
            },
            "_key": "TFT9_Augment_Commander_RollingForDays",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Rolling-For-Days-I.png"
        },
        {
            "apiName": "TFT_Augment_ClockworkAccelerator",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn được tăng 10% Tốc Độ Đánh sau mỗi 3 giây giao tranh.",
            "effects": {
                "AttackSpeed": 0.10000000149011612,
                "Frequency": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ClockworkAccelerator_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Động Cơ Tăng Tốc",
            "unique": false,
            "org": {
                "desc": "Đội của bạn được tăng @attackspeed*100@% Tốc Độ Đánh sau mỗi @frequency@ giây giao tranh.",
                "effects": {
                    "AttackSpeed": 0.10000000149011612,
                    "Frequency": 3
                }
            },
            "_key": "TFT_Augment_ClockworkAccelerator",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ClockworkAccelerator_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT11_Augment_Buildabud",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 tướng 1 vàng 3 sao ngẫu nhiên và 10 vàng.",
            "effects": {
                "Gold": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BuildABud_III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tự Lập Đội!",
            "unique": false,
            "org": {
                "desc": "Nhận 1 tướng 1 vàng 3 sao ngẫu nhiên và @gold@ vàng.",
                "effects": {
                    "Gold": 10
                }
            },
            "_key": "TFT11_Augment_Buildabud",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BuildABud_III.png"
        },
        {
            "apiName": "TFT_Augment_Kingslayer",
            "associatedTraits": [],
            "composition": [],
            "desc": "Sau khi thắng giao tranh người chơi, nhận 1 vàng. Nếu đối thủ có nhiều máu hơn bạn, thay vào đó nhận 6 Vàng. Nhận ngay 1 vàng.",
            "effects": {
                "Gold": 1,
                "WinBonusGold": 6,
                "WinGold": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Kingslayer_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đồ Vương",
            "unique": false,
            "org": {
                "desc": "Sau khi thắng giao tranh người chơi, nhận @Gold@ vàng. Nếu đối thủ có nhiều máu hơn bạn, thay vào đó nhận @WinBonusGold@ Vàng. Nhận ngay @Gold@ vàng.",
                "effects": {
                    "Gold": 1,
                    "WinBonusGold": 6,
                    "WinGold": 1
                }
            },
            "_key": "TFT_Augment_Kingslayer",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Kingslayer_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_NobleSacrifice",
            "associatedTraits": [],
            "composition": [],
            "desc": "Khi đồng minh đầu tiên của bạn hy sinh trong mỗi giao tranh, trao cho đội của bạn 25 + 10% Giáp và Kháng Phép của đồng minh đó.",
            "effects": {
                "BaseResists": 25,
                "SharePerc": 0.10000000149011612
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ANobleSacrifice_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hy Sinh Cao Cả",
            "unique": false,
            "org": {
                "desc": "Khi đồng minh đầu tiên của bạn hy sinh trong mỗi giao tranh, trao cho đội của bạn @BaseResists@ + @SharePerc*100@% Giáp và Kháng Phép của đồng minh đó.",
                "effects": {
                    "BaseResists": 25,
                    "SharePerc": 0.10000000149011612
                }
            },
            "_key": "TFT_Augment_NobleSacrifice",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ANobleSacrifice_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_StarryNight",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng 1 vàng và 2 vàng trong cửa hàng của bạn có xác suất trở thành 2 sao. Nhận 6 vàng.<br><br>Xác Suất Hiện Tại: 0%<br><rules>Xác suất tăng lên theo cấp người chơi.</rules>",
            "effects": {
                "Gold": 6,
                "{019b80fe}": 0.800000011920929,
                "{020fb2eb}": 0.25,
                "{0d14760d}": 2,
                "{4885b8ce}": 1,
                "{49c43705}": 0.20000000298023224,
                "{4abd7204}": 0.18000000715255737,
                "{7083c200}": 0.30000001192092896,
                "{99dcb7a2}": 0.2199999988079071,
                "{ca771d21}": 0.5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/StarryNight_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đêm Đầy Sao",
            "unique": false,
            "org": {
                "desc": "Tướng 1 vàng và 2 vàng trong cửa hàng của bạn có xác suất trở thành 2 sao. Nhận @Gold@ vàng.<br><br>Xác Suất Hiện Tại: @TFTUnitProperty.item:TFT_Augment_StarryNight_Odds@%<br><rules>Xác suất tăng lên theo cấp người chơi.</rules>",
                "effects": {
                    "Gold": 6,
                    "{019b80fe}": 0.800000011920929,
                    "{020fb2eb}": 0.25,
                    "{0d14760d}": 2,
                    "{4885b8ce}": 1,
                    "{49c43705}": 0.20000000298023224,
                    "{4abd7204}": 0.18000000715255737,
                    "{7083c200}": 0.30000001192092896,
                    "{99dcb7a2}": 0.2199999988079071,
                    "{ca771d21}": 0.5
                }
            },
            "_key": "TFT_Augment_StarryNight",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/StarryNight_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_Corrosion",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng địch đứng ở 2 hàng trên sẽ bị mất 3 Giáp và Kháng Phép sau mỗi 2 giây.",
            "effects": {
                "ResistLoss": 3,
                "Time": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Corrosion_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ăn Mòn",
            "unique": false,
            "org": {
                "desc": "Tướng địch đứng ở 2 hàng trên sẽ bị mất @ResistLoss@ Giáp và Kháng Phép sau mỗi @Time@ giây.",
                "effects": {
                    "ResistLoss": 3,
                    "Time": 2
                }
            },
            "_key": "TFT_Augment_Corrosion",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Corrosion_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT7_Augment_LategameSpecialist",
            "associatedTraits": [],
            "composition": [],
            "desc": "Khi đạt cấp 9, nhận 33 vàng.",
            "effects": {
                "Gold": 33,
                "LevelReq": 9
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Late-Game-Specialist-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hướng Đến Hồi Kết",
            "unique": false,
            "org": {
                "desc": "Khi đạt cấp @LevelReq@, nhận @Gold@ vàng.",
                "effects": {
                    "Gold": 33,
                    "LevelReq": 9
                }
            },
            "_key": "TFT7_Augment_LategameSpecialist",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Late-Game-Specialist-I.png"
        },
        {
            "apiName": "TFT_Augment_Golemify",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mất đi tất cả tướng trên bàn đấu và trên hàng dự bị của bạn. Nhận 1 Người Đá mang 90% tổng Máu và 60% tổng Sức Mạnh Công Kích của tất cả các tướng đó. Người Đá nhận thêm 500 Máu mỗi giai đoạn.",
            "effects": {
                "ADPercent": 60,
                "HPPerStage": 500,
                "HealthPercent": 90
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Golemify_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Người Đá Càn Quét",
            "unique": false,
            "org": {
                "desc": "Mất đi tất cả tướng trên bàn đấu và trên hàng dự bị của bạn. Nhận 1 Người Đá mang @HealthPercent@% tổng Máu và @ADPercent@% tổng Sức Mạnh Công Kích của tất cả các tướng đó. Người Đá nhận thêm @HPPerStage@ Máu mỗi giai đoạn.",
                "effects": {
                    "ADPercent": 60,
                    "HPPerStage": 500,
                    "HealthPercent": 90
                }
            },
            "_key": "TFT_Augment_Golemify",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Golemify_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT7_Augment_BirthdayPresents",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận một tướng 2 sao và 1 vàng mỗi khi bạn lên cấp. Bậc của tướng sẽ là cấp của bạn trừ 4 (tối đa: 5 vàng).",
            "effects": {
                "Gold": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Golden-Gifts-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Quà Sinh Nhật",
            "unique": false,
            "org": {
                "desc": "Nhận một tướng 2 sao và @Gold@ vàng mỗi khi bạn lên cấp. Bậc của tướng sẽ là cấp của bạn trừ 4 (tối đa: 5 vàng).",
                "effects": {
                    "Gold": 1
                }
            },
            "_key": "TFT7_Augment_BirthdayPresents",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Golden-Gifts-III.png"
        },
        {
            "apiName": "TFT_Augment_Pyromaniac",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Bùa Đỏ. Thiêu Đốt của bạn gây thêm 50% sát thương.",
            "effects": {
                "BurnIncrease": 0.5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pyromaniac_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hỏa Cuồng Nhân",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Bùa Đỏ. Thiêu Đốt của bạn gây thêm @BurnIncrease*100@% sát thương.",
                "effects": {
                    "BurnIncrease": 0.5
                }
            },
            "_key": "TFT_Augment_Pyromaniac",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Pyromaniac_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_ShimmerscaleEssence",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Giáp Đại Hãn. Sau 5 vòng đấu, nhận 1 Kiếm Của Tay Bạc.<br><br><rules>Những trang bị này mang lại vàng và tăng sức mạnh chiến đấu.</rules>",
            "effects": {
                "CombatNum": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ShimmerscaleEssence_III.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tinh Túy Kim Long",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Giáp Đại Hãn. Sau @combatnum@ vòng đấu, nhận 1 Kiếm Của Tay Bạc.<br><br><rules>Những trang bị này mang lại vàng và tăng sức mạnh chiến đấu.</rules>",
                "effects": {
                    "CombatNum": 5
                }
            },
            "_key": "TFT_Augment_ShimmerscaleEssence",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ShimmerscaleEssence_III.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_BranchingOut",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Ấn ngẫu nhiên và 1 Búa Rèn.<br><br><rules>Búa Rèn cho phép bạn tái tạo bất kỳ trang bị nào.</rules>",
            "effects": {
                "Numberofcombats": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Branching-Out-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Phân Nhánh",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn ngẫu nhiên và 1 Búa Rèn.<br><br><rules>Búa Rèn cho phép bạn tái tạo bất kỳ trang bị nào.</rules>",
                "effects": {
                    "Numberofcombats": null
                }
            },
            "_key": "TFT_Augment_BranchingOut",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Branching-Out-I.png"
        },
        {
            "apiName": "TFT9_Augment_DravenSpoilsOfWar3",
            "associatedTraits": [],
            "composition": [],
            "desc": "Kẻ địch có 45% tỉ lệ rớt ra báu vật khi bị tiêu diệt.",
            "effects": {
                "LootDropChance": 0.44999998807907104,
                "{ac7ef35a}": 0.4000000059604645
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Spoils-Of-War-Legend-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chiến Lợi Phẩm III",
            "unique": false,
            "org": {
                "desc": "Kẻ địch có @LootDropChance*100@% tỉ lệ rớt ra báu vật khi bị tiêu diệt.",
                "effects": {
                    "LootDropChance": 0.44999998807907104,
                    "{ac7ef35a}": 0.4000000059604645
                }
            },
            "_key": "TFT9_Augment_DravenSpoilsOfWar3",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Spoils-Of-War-Legend-III.png"
        },
        {
            "apiName": "TFT9_Augment_DravenSpoilsOfWar2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Kẻ địch có 30% tỉ lệ rớt ra báu vật khi bị tiêu diệt.",
            "effects": {
                "LootDropChance": 0.30000001192092896,
                "{ac7ef35a}": 0.30000001192092896
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Spoils-Of-War-Legend-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chiến Lợi Phẩm II",
            "unique": false,
            "org": {
                "desc": "Kẻ địch có @LootDropChance*100@% tỉ lệ rớt ra báu vật khi bị tiêu diệt.",
                "effects": {
                    "LootDropChance": 0.30000001192092896,
                    "{ac7ef35a}": 0.30000001192092896
                }
            },
            "_key": "TFT9_Augment_DravenSpoilsOfWar2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Spoils-Of-War-Legend-II.png"
        },
        {
            "apiName": "TFT_Augment_SubscriptionService",
            "associatedTraits": [],
            "composition": [],
            "desc": "Ngay bây giờ và vào thời điểm bắt đầu mỗi Giai Đoạn, mở 1 Cửa Hàng bao gồm 4 tướng 4 vàng khác nhau và nhận 8 vàng.",
            "effects": {
                "ChampionTier": 4,
                "GoldPerStage": 8
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/SubscriptionService_III.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Dịch Vụ Gói Đăng Ký",
            "unique": false,
            "org": {
                "desc": "Ngay bây giờ và vào thời điểm bắt đầu mỗi Giai Đoạn, mở 1 Cửa Hàng bao gồm 4 tướng 4 vàng khác nhau và nhận @GoldPerStage@ vàng.",
                "effects": {
                    "ChampionTier": 4,
                    "GoldPerStage": 8
                }
            },
            "_key": "TFT_Augment_SubscriptionService",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/SubscriptionService_III.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_ShojinSpirit",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận thêm 10% Sức Mạnh Công Kích và 10 Năng Lượng. Nhận 1 Kiếm B.F.",
            "effects": {
                "AD": 0.10000000149011612,
                "Mana": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Will-of-the-Spear-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ý Chỉ Ngọn Giáo",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận thêm @AD*100@% Sức Mạnh Công Kích và @Mana@ Năng Lượng. Nhận 1 Kiếm B.F.",
                "effects": {
                    "AD": 0.10000000149011612,
                    "Mana": 10
                }
            },
            "_key": "TFT_Augment_ShojinSpirit",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Will-of-the-Spear-II.png"
        },
        {
            "apiName": "TFT11_Augment_Reinfourcement",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng 4 vàng tiếp theo bạn mua sẽ lập tức được nâng lên 2 sao. Nhận&nbsp;12&nbsp;vàng.",
            "effects": {
                "Gold": 12
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Reinfourcement_II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tứ Phương Tiếp Viện",
            "unique": false,
            "org": {
                "desc": "Tướng 4 vàng tiếp theo bạn mua sẽ lập tức được nâng lên 2 sao. Nhận&nbsp;@Gold@&nbsp;vàng.",
                "effects": {
                    "Gold": 12
                }
            },
            "_key": "TFT11_Augment_Reinfourcement",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Reinfourcement_II.png"
        },
        {
            "apiName": "TFT_Augment_NoScoutNoPivot",
            "associatedTraits": [],
            "composition": [],
            "desc": "Tướng sẽ không thể được bán hoặc chuyển về dự bị sau khi đã chiến đấu ở một vòng giao tranh người chơi. Sau mỗi giao tranh người chơi, tướng tham gia chiến đấu nhận được 20 Máu, 2% SMCK và 1.5% SMPT.",
            "effects": {
                "ADScale": 0.014999999664723873,
                "APScale": 1.5,
                "HPScale": 20,
                "MaxUnits": 99,
                "{eba92878}": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/NoScoutNoPivot_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "NHẮM MẮT CHƠI BỪA",
            "unique": false,
            "org": {
                "desc": "Tướng sẽ không thể được bán hoặc chuyển về dự bị sau khi đã chiến đấu ở một vòng giao tranh người chơi. Sau mỗi giao tranh người chơi, tướng tham gia chiến đấu nhận được @HPScale@ Máu, @ADScale*100@% SMCK và @APScale@% SMPT.",
                "effects": {
                    "ADScale": 0.014999999664723873,
                    "APScale": 1.5,
                    "HPScale": 20,
                    "MaxUnits": 99,
                    "{eba92878}": null
                }
            },
            "_key": "TFT_Augment_NoScoutNoPivot",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/NoScoutNoPivot_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_Backup",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn được tăng 12% Tốc Độ Đánh nếu có ít nhất 4 đồng minh bắt đầu giao tranh ở 2 hàng sau.",
            "effects": {
                "AttackSpeed": 0.11999999731779099,
                "MinUnits": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Backup-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Dự Phòng",
            "unique": false,
            "org": {
                "desc": "Đội của bạn được tăng @AttackSpeed*100@% Tốc Độ Đánh nếu có ít nhất @MinUnits@ đồng minh bắt đầu giao tranh ở 2 hàng sau.",
                "effects": {
                    "AttackSpeed": 0.11999999731779099,
                    "MinUnits": 4
                }
            },
            "_key": "TFT_Augment_Backup",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Backup-I.png",
            "balance": 1,
            "diff": {
                "effects": [
                    "AttackSpeed%"
                ]
            }
        },
        {
            "apiName": "TFT_Augment_GoldForDummies",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Hình Nhân. Sau mỗi 10 giây, tất cả Hình Nhân cho bạn 1 vàng.",
            "effects": {
                "GoldAmount": 1,
                "GoldDuration": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GoldforDummies_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hình Nhân Sinh Vàng",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Hình Nhân. Sau mỗi @GoldDuration@ giây, tất cả Hình Nhân cho bạn @GoldAmount@ vàng.",
                "effects": {
                    "GoldAmount": 1,
                    "GoldDuration": 10
                }
            },
            "_key": "TFT_Augment_GoldForDummies",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/GoldforDummies_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_QualityOverQuantity",
            "associatedTraits": [],
            "composition": [],
            "desc": "Các tướng mang đúng 1 trang bị sẽ được nâng cấp trang bị đó lên dạng Ánh Sáng. Các tướng mang trang bị Ánh Sáng nhận 4% Máu. Nhận 2 Nam Châm Ma Thuật.<br><br><rules>Găng Đạo Tặc được tính là nhiều trang bị.</rules>",
            "effects": {
                "BonusHealth": 0.03999999910593033,
                "MaxUnits": 99,
                "NumRemovers": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/QualityoverQuantity_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chất Lượng Hơn Số Lượng",
            "unique": false,
            "org": {
                "desc": "Các tướng mang đúng 1 trang bị sẽ được nâng cấp trang bị đó lên dạng Ánh Sáng. Các tướng mang trang bị Ánh Sáng nhận @BonusHealth*100@% Máu. Nhận @NumRemovers@ Nam Châm Ma Thuật.<br><br><rules>Găng Đạo Tặc được tính là nhiều trang bị.</rules>",
                "effects": {
                    "BonusHealth": 0.03999999910593033,
                    "MaxUnits": 99,
                    "NumRemovers": 2
                }
            },
            "_key": "TFT_Augment_QualityOverQuantity",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/QualityoverQuantity_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_DefenseCall",
            "associatedTraits": [],
            "composition": [],
            "desc": "Khi có Lá Chắn, các tướng của bạn nhận 10% Sức Chống Chịu. Lần đầu tiên khi các đồng minh xuống dưới 50% Máu, họ nhận được 100-225 Lá Chắn (tùy theo Giai Đoạn) trong 3 giây.<br>",
            "effects": {
                "HealthThreshold": 0.5,
                "ReducedDamage": 0.10000000149011612,
                "ShieldAmount1": 100,
                "ShieldAmount2": 150,
                "ShieldAmount3": 200,
                "ShieldAmount4": 225,
                "ShieldDuration": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Defensive-Call-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lá Chắn Tăng Cường",
            "unique": false,
            "org": {
                "desc": "Khi có Lá Chắn, các tướng của bạn nhận @ReducedDamage*100@% Sức Chống Chịu. Lần đầu tiên khi các đồng minh xuống dưới @HealthThreshold*100@% Máu, họ nhận được @ShieldAmount1@-@ShieldAmount4@ Lá Chắn (tùy theo Giai Đoạn) trong @ShieldDuration@ giây.<br>",
                "effects": {
                    "HealthThreshold": 0.5,
                    "ReducedDamage": 0.10000000149011612,
                    "ShieldAmount1": 100,
                    "ShieldAmount2": 150,
                    "ShieldAmount3": 200,
                    "ShieldAmount4": 225,
                    "ShieldDuration": 3
                }
            },
            "_key": "TFT_Augment_DefenseCall",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Defensive-Call-II.png"
        },
        {
            "apiName": "TFT_Augment_Placebo",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 8 vàng. Đội của bạn được tăng 1% Tốc Độ Đánh.",
            "effects": {
                "AttackSpeed": 0.009999999776482582,
                "Gold": 8
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Placebo_I.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Giả Dược",
            "unique": false,
            "org": {
                "desc": "Nhận @Gold@ vàng. Đội của bạn được tăng @AttackSpeed*100@% Tốc Độ Đánh.",
                "effects": {
                    "AttackSpeed": 0.009999999776482582,
                    "Gold": 8
                }
            },
            "_key": "TFT_Augment_Placebo",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Placebo_I.TFT_Set12.png"
        },
        {
            "apiName": "TFT_Augment_MirroredMonetization",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 vàng. Trong 3 vòng tiếp theo, tướng địch sẽ rớt ra 2 vàng khi bị tiêu diệt.",
            "effects": {
                "GoldContained": 2,
                "PercCost": 2,
                "rounds": 3
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/MirroredMonetization_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Dòng Tiền Mờ Ám",
            "unique": false,
            "org": {
                "desc": "Nhận @GoldContained@ vàng. Trong @Rounds@ vòng tiếp theo, tướng địch sẽ rớt ra @PercCost@ vàng khi bị tiêu diệt.",
                "effects": {
                    "GoldContained": 2,
                    "PercCost": 2,
                    "rounds": 3
                }
            },
            "_key": "TFT_Augment_MirroredMonetization",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/MirroredMonetization_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_CookingPot",
            "associatedTraits": [],
            "composition": [],
            "desc": "Khi bắt đầu mỗi lượt, tất cả tướng đang mang trang bị Xẻng Vàng hoặc Chảo Vàng sẽ vĩnh viễn cho tướng ở gần nhất 50 Máu. Nhận 1 Chảo Vàng.",
            "effects": {
                "AbilityPower": 1,
                "Health": 50
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/CookingPot_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nồi Nấu Ăn",
            "unique": false,
            "org": {
                "desc": "Khi bắt đầu mỗi lượt, tất cả tướng đang mang trang bị Xẻng Vàng hoặc Chảo Vàng sẽ vĩnh viễn cho tướng ở gần nhất @Health@ Máu. Nhận 1 Chảo Vàng.",
                "effects": {
                    "AbilityPower": 1,
                    "Health": 50
                }
            },
            "_key": "TFT_Augment_CookingPot",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/CookingPot_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_PandorasRadiantBox",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt đầu vòng đấu: Các trang bị trên hàng dự bị được đánh tráo ngẫu nhiên. <br><br>Nhận 1 Trang Bị Ánh Sáng ngẫu nhiên.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pandora3.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Trang Bị Pandora III",
            "unique": false,
            "org": {
                "desc": "Bắt đầu vòng đấu: Các trang bị trên hàng dự bị được đánh tráo ngẫu nhiên. <br><br>Nhận 1 Trang Bị Ánh Sáng ngẫu nhiên.",
                "effects": {}
            },
            "_key": "TFT9_Augment_PandorasRadiantBox",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Pandora3.png"
        },
        {
            "apiName": "TFT_Augment_Scavenger",
            "associatedTraits": [],
            "composition": [],
            "desc": "5 tướng địch đầu tiên bị tiêu diệt mỗi giao tranh sẽ cho một tướng của đội bạn một trang bị hoàn chỉnh tạm thời.",
            "effects": {
                "NumDeaths": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Scavenger_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Thu Gom Phế Liệu",
            "unique": false,
            "org": {
                "desc": "@NumDeaths@ tướng địch đầu tiên bị tiêu diệt mỗi giao tranh sẽ cho một tướng của đội bạn một trang bị hoàn chỉnh tạm thời.",
                "effects": {
                    "NumDeaths": 5
                }
            },
            "_key": "TFT_Augment_Scavenger",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Scavenger_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT6_Augment_TradeSector",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 lượt đổi miễn phí mỗi vòng đấu. Nhận 4 vàng.",
            "effects": {
                "Gold": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Trade2.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Khu Giao Dịch",
            "unique": false,
            "org": {
                "desc": "Nhận 1 lượt đổi miễn phí mỗi vòng đấu. Nhận @Gold@ vàng.",
                "effects": {
                    "Gold": 4
                }
            },
            "_key": "TFT6_Augment_TradeSector",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Trade2.png"
        },
        {
            "apiName": "TFT_Augment_Pilfer",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi vòng đấu, nhận 1 bản sao 1 sao của tướng đầu tiên bạn tiêu diệt ở vòng giao tranh trước.",
            "effects": {
                "Gold": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pilfer_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ăn Trộm",
            "unique": false,
            "org": {
                "desc": "Mỗi vòng đấu, nhận 1 bản sao 1 sao của tướng đầu tiên bạn tiêu diệt ở vòng giao tranh trước.",
                "effects": {
                    "Gold": null
                }
            },
            "_key": "TFT_Augment_Pilfer",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Pilfer_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT9_Augment_BigGrabBag",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 3 trang bị thành phần ngẫu nhiên, 2 vàng và 1 Búa Rèn. <br><br><rules>Búa Rèn cho phép bạn tái tạo bất kỳ trang bị nào.</rules>",
            "effects": {
                "Gold": 2,
                "NumItems": 3,
                "NumReforgers": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Grab-Bag-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Túi Đồ Cỡ Đại",
            "unique": false,
            "org": {
                "desc": "Nhận @NumItems@ trang bị thành phần ngẫu nhiên, @Gold@ vàng và 1 Búa Rèn. <br><br><rules>Búa Rèn cho phép bạn tái tạo bất kỳ trang bị nào.</rules>",
                "effects": {
                    "Gold": 2,
                    "NumItems": 3,
                    "NumReforgers": 1
                }
            },
            "_key": "TFT9_Augment_BigGrabBag",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Grab-Bag-II.png"
        },
        {
            "apiName": "TFT9_Augment_BardPlaybook2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận một gói trang bị thành phần khi bạn đạt cấp 5, 6, 7 và 8.<br><br><rules>Gói trang bị cho bạn 4 lựa chọn.</rules>",
            "effects": {
                "levelreqa": 5,
                "levelreqb": 6,
                "levelreqc": 7,
                "levelreqd": 8
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Caretaker_s-Chosen-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chúc Phúc Của Bụt",
            "unique": false,
            "org": {
                "desc": "Nhận một gói trang bị thành phần khi bạn đạt cấp @levelreqa@, @levelreqb@, @levelreqc@ và @levelreqd@.<br><br><rules>Gói trang bị cho bạn 4 lựa chọn.</rules>",
                "effects": {
                    "levelreqa": 5,
                    "levelreqb": 6,
                    "levelreqc": 7,
                    "levelreqd": 8
                }
            },
            "_key": "TFT9_Augment_BardPlaybook2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Caretaker_s-Chosen-II.png"
        },
        {
            "apiName": "TFT9_Augment_BardPlaybook3",
            "associatedTraits": [],
            "composition": [],
            "desc": "Cấp càng cao thì càng nhận thêm nhiều trang bị mạnh.<br>Cấp 4: gói trang bị thành phần<br>Cấp 6: gói trang bị hoàn chỉnh<br>Cấp 7: chọn 1 trong 5 trang bị Ánh Sáng",
            "effects": {
                "levelreqa": 4,
                "levelreqb": 6,
                "levelreqc": 7
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Caretaker_s-Chosen-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ân Chủ Của Bụt",
            "unique": false,
            "org": {
                "desc": "Cấp càng cao thì càng nhận thêm nhiều trang bị mạnh.<br>Cấp @levelreqa@: gói trang bị thành phần<br>Cấp @levelreqb@: gói trang bị hoàn chỉnh<br>Cấp @levelreqc@: chọn 1 trong 5 trang bị Ánh Sáng",
                "effects": {
                    "levelreqa": 4,
                    "levelreqb": 6,
                    "levelreqc": 7
                }
            },
            "_key": "TFT9_Augment_BardPlaybook3",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Caretaker_s-Chosen-III.png"
        },
        {
            "apiName": "TFT6_Augment_GachaAddict",
            "associatedTraits": [],
            "composition": [],
            "desc": "Mỗi khi Cửa Hàng được đổi lại, bạn có 45% tỉ lệ nhận được thêm 1 lượt đổi miễn phí.",
            "effects": {
                "RerollPercent": 45
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GoldenTicket3.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vé Kim Cương",
            "unique": false,
            "org": {
                "desc": "Mỗi khi Cửa Hàng được đổi lại, bạn có @RerollPercent@% tỉ lệ nhận được thêm 1 lượt đổi miễn phí.",
                "effects": {
                    "RerollPercent": 45
                }
            },
            "_key": "TFT6_Augment_GachaAddict",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/GoldenTicket3.png"
        },
        {
            "apiName": "TFT9_Augment_BardPlaybook1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Lập tức nhận một tướng 2-vàng ngẫu nhiên. Mỗi lần thăng cấp, nhận được tướng này một lần nữa.<br><br>Tướng: 1",
            "effects": {
                "UnitTier": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Caretaker_s-Chosen-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đồng Minh Của Bụt",
            "unique": false,
            "org": {
                "desc": "Lập tức nhận một tướng @UnitTier@-vàng ngẫu nhiên. Mỗi lần thăng cấp, nhận được tướng này một lần nữa.<br><br>Tướng: @TFTUnitProperty.item:TFT_Augment_WorthTheWait@",
                "effects": {
                    "UnitTier": 2
                }
            },
            "_key": "TFT9_Augment_BardPlaybook1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Caretaker_s-Chosen-I.png"
        },
        {
            "apiName": "TFT_Augment_Sponging",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt đầu giao tranh: Tối đa 6 tướng với 1 trang bị hoặc ít hơn sẽ nhận được 1 bản sao của trang bị hoàn chỉnh ngẫu nhiên từ đồng minh gần nhất có mang trang bị.",
            "effects": {
                "MaxItemsToBeEligible": 1,
                "MaxUnits": 6
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Sponging_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ăn Bám",
            "unique": false,
            "org": {
                "desc": "Bắt đầu giao tranh: Tối đa @MaxUnits@ tướng với @MaxItemsToBeEligible@ trang bị hoặc ít hơn sẽ nhận được 1 bản sao của trang bị hoàn chỉnh ngẫu nhiên từ đồng minh gần nhất có mang trang bị.",
                "effects": {
                    "MaxItemsToBeEligible": 1,
                    "MaxUnits": 6
                }
            },
            "_key": "TFT_Augment_Sponging",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Sponging_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT9_Augment_RiskyMoves",
            "associatedTraits": [],
            "composition": [],
            "desc": "Linh Thú của bạn mất 20 Máu, nhưng sau 7 vòng giao chiến với người chơi, nhận 30 vàng.",
            "effects": {
                "Gold": 30,
                "Health": 20,
                "PlayerCombatNum": 7
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Risky-Moves-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nước Đi Liều Lĩnh",
            "unique": false,
            "org": {
                "desc": "Linh Thú của bạn mất @Health@ Máu, nhưng sau @PlayerCombatNum@ vòng giao chiến với người chơi, nhận @Gold@ vàng.",
                "effects": {
                    "Gold": 30,
                    "Health": 20,
                    "PlayerCombatNum": 7
                }
            },
            "_key": "TFT9_Augment_RiskyMoves",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Risky-Moves-I.png"
        },
        {
            "apiName": "TFT_Augment_Moonlight",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt đầu giao tranh: 1 tướng 1 vàng ngẫu nhiên được nâng cấp lên 3 sao trong vòng này và nhận thêm 45% Sức Mạnh Công Kích cùng 45 Sức Mạnh Phép Thuật.<br>",
            "effects": {
                "ADBonus": 0.44999998807907104,
                "APBonus": 45,
                "ItemBonus": null,
                "NumUnits": 1,
                "{51b72188}": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Moonlight_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ánh Trăng",
            "unique": false,
            "org": {
                "desc": "Bắt đầu giao tranh: @NumUnits@ tướng 1 vàng ngẫu nhiên được nâng cấp lên 3 sao trong vòng này và nhận thêm @ADBonus*100@% Sức Mạnh Công Kích cùng @APBONUS@ Sức Mạnh Phép Thuật.<br>",
                "effects": {
                    "ADBonus": 0.44999998807907104,
                    "APBonus": 45,
                    "ItemBonus": null,
                    "NumUnits": 1,
                    "{51b72188}": null
                }
            },
            "_key": "TFT_Augment_Moonlight",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Moonlight_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT7_Augment_BandOfThieves1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Găng Đạo Tặc",
            "effects": {
                "NumGloves": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BandThieves1.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Băng Trộm I",
            "unique": false,
            "org": {
                "desc": "Nhận @NumGloves@ Găng Đạo Tặc",
                "effects": {
                    "NumGloves": 1
                }
            },
            "_key": "TFT7_Augment_BandOfThieves1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BandThieves1.png"
        },
        {
            "apiName": "TFT_Augment_ShopGlitch",
            "associatedTraits": [],
            "composition": [],
            "desc": "Trong những vòng không phải giao tranh người chơi, cửa hàng của bạn sẽ làm mới miễn phí sau mỗi 2.5 giây trong 30 giây.",
            "effects": {
                "RefreshTimer": 2.5,
                "TotalTimer": 30
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ShopGlitch_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cửa Hàng Chập Mạch",
            "unique": false,
            "org": {
                "desc": "Trong những vòng không phải giao tranh người chơi, cửa hàng của bạn sẽ làm mới miễn phí sau mỗi @RefreshTimer@ giây trong @TotalTimer@ giây.",
                "effects": {
                    "RefreshTimer": 2.5,
                    "TotalTimer": 30
                }
            },
            "_key": "TFT_Augment_ShopGlitch",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ShopGlitch_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT7_Augment_LivingForge",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận ngay 1 Gói Trang Bị Tạo Tác và sau mỗi 9 vòng giao chiến với người chơi.<br><br><rules>Tạo Tác là những trang bị mạnh mẽ hơn với hiệu ứng đặc biệt.</rules>",
            "effects": {
                "Numberofcombats": 9
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Living-Forge-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chế Tạo Tại Chỗ",
            "unique": false,
            "org": {
                "desc": "Nhận ngay 1 Gói Trang Bị Tạo Tác và sau mỗi @NumberOfCombats@ vòng giao chiến với người chơi.<br><br><rules>Tạo Tác là những trang bị mạnh mẽ hơn với hiệu ứng đặc biệt.</rules>",
                "effects": {
                    "Numberofcombats": 9
                }
            },
            "_key": "TFT7_Augment_LivingForge",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Living-Forge-III.png"
        },
        {
            "apiName": "TFT_Augment_Warpath",
            "associatedTraits": [],
            "composition": [],
            "desc": "Sau khi gây 60 sát thương lên người chơi, nhận 1 rương chứa các tướng bậc cao và trang bị.<br>(Hiện tại: 0)",
            "effects": {
                "PlayerDamage": 60,
                "{16253d09}": null,
                "{3dc22ab3}": 3,
                "{68c537b7}": null,
                "{6cf88c79}": 1,
                "{7c96bf44}": 2
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Warpath_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đường Ra Trận",
            "unique": false,
            "org": {
                "desc": "Sau khi gây @PlayerDamage@ sát thương lên người chơi, nhận 1 rương chứa các tướng bậc cao và trang bị.<br>(Hiện tại: @TFTUnitProperty.item:TFT_Augment_Warpath_DamageCount@)",
                "effects": {
                    "PlayerDamage": 60,
                    "{16253d09}": null,
                    "{3dc22ab3}": 3,
                    "{68c537b7}": null,
                    "{6cf88c79}": 1,
                    "{7c96bf44}": 2
                }
            },
            "_key": "TFT_Augment_Warpath",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Warpath_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_BulkyBuddies2",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đồng minh bắt đầu giao tranh bên cạnh duy nhất 1 đồng minh khác nhận 175 Máu. Khi tướng đó bị hạ gục, tướng còn lại nhận Lá Chắn tương đương 15% Máu tối đa trong 10 giây.",
            "effects": {
                "HealthBonus": 175,
                "ShieldAmount": 0.15000000596046448,
                "ShieldDuration": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BulkyBuddies_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bạn Hữu Đô Con II",
            "unique": false,
            "org": {
                "desc": "Đồng minh bắt đầu giao tranh bên cạnh duy nhất 1 đồng minh khác nhận @HealthBonus@ Máu. Khi tướng đó bị hạ gục, tướng còn lại nhận Lá Chắn tương đương @ShieldAmount*100@% Máu tối đa trong @ShieldDuration@ giây.",
                "effects": {
                    "HealthBonus": 175,
                    "ShieldAmount": 0.15000000596046448,
                    "ShieldDuration": 10
                }
            },
            "_key": "TFT_Augment_BulkyBuddies2",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BulkyBuddies_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_BulkyBuddies3",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đồng minh bắt đầu giao tranh bên cạnh duy nhất 1 đồng minh khác nhận 330 Máu. Khi tướng đó bị hạ gục, tướng còn lại nhận Lá Chắn tương đương 18% Máu tối đa trong 10 giây.",
            "effects": {
                "HealthBonus": 330,
                "ShieldAmount": 0.18000000715255737,
                "ShieldDuration": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BulkyBuddies_III.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bạn Hữu Đô Con III",
            "unique": false,
            "org": {
                "desc": "Đồng minh bắt đầu giao tranh bên cạnh duy nhất 1 đồng minh khác nhận @HealthBonus@ Máu. Khi tướng đó bị hạ gục, tướng còn lại nhận Lá Chắn tương đương @ShieldAmount*100@% Máu tối đa trong @ShieldDuration@ giây.",
                "effects": {
                    "HealthBonus": 330,
                    "ShieldAmount": 0.18000000715255737,
                    "ShieldDuration": 10
                }
            },
            "_key": "TFT_Augment_BulkyBuddies3",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BulkyBuddies_III.TFT_Set13.png"
        },
        {
            "apiName": "TFT6_Augment_RadiantRelics",
            "associatedTraits": [],
            "composition": [],
            "desc": "Chọn 1 trong 5 Trang Bị Ánh Sáng. Nhận 1 Nam Châm Ma Thuật.<br><br><rules>Trang Bị Ánh Sáng là phiên bản mạnh mẽ hơn của những trang bị hoàn chỉnh.</rules>",
            "effects": {
                "ArmoryChoiceCount": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RadiantRelic-III.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kho Thần Tích",
            "unique": false,
            "org": {
                "desc": "Chọn 1 trong @ArmoryChoiceCount@ Trang Bị Ánh Sáng. Nhận 1 Nam Châm Ma Thuật.<br><br><rules>Trang Bị Ánh Sáng là phiên bản mạnh mẽ hơn của những trang bị hoàn chỉnh.</rules>",
                "effects": {
                    "ArmoryChoiceCount": 5
                }
            },
            "_key": "TFT6_Augment_RadiantRelics",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/RadiantRelic-III.png"
        },
        {
            "apiName": "TFT_Augment_BulkyBuddies1",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đồng minh bắt đầu giao tranh bên cạnh duy nhất 1 đồng minh khác nhận 100 Máu. Khi tướng đó bị hạ gục, tướng còn lại nhận Lá Chắn tương đương 10% Máu tối đa trong 10 giây.",
            "effects": {
                "HealthBonus": 100,
                "ShieldAmount": 0.10000000149011612,
                "ShieldDuration": 10
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BulkyBuddies_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Bạn Hữu Đô Con I",
            "unique": false,
            "org": {
                "desc": "Đồng minh bắt đầu giao tranh bên cạnh duy nhất 1 đồng minh khác nhận @HealthBonus@ Máu. Khi tướng đó bị hạ gục, tướng còn lại nhận Lá Chắn tương đương @ShieldAmount*100@% Máu tối đa trong @ShieldDuration@ giây.",
                "effects": {
                    "HealthBonus": 100,
                    "ShieldAmount": 0.10000000149011612,
                    "ShieldDuration": 10
                }
            },
            "_key": "TFT_Augment_BulkyBuddies1",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/BulkyBuddies_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_GuardbreakerSpirit",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Găng Đấu Tập. Đội của bạn nhận thêm 8% Tốc Độ Đánh và 20% Tỉ Lệ Chí Mạng.",
            "effects": {
                "AS": 0.07999999821186066,
                "CritChance": 0.20000000298023224
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Will-of-the-Flail-II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ý Chỉ Xích Chùy",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Găng Đấu Tập. Đội của bạn nhận thêm @AS*100@% Tốc Độ Đánh và @CritChance*100@% Tỉ Lệ Chí Mạng.",
                "effects": {
                    "AS": 0.07999999821186066,
                    "CritChance": 0.20000000298023224
                }
            },
            "_key": "TFT_Augment_GuardbreakerSpirit",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Will-of-the-Flail-II.png"
        },
        {
            "apiName": "TFT_Augment_ImTheCarryNow",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Người Đá mang các trang bị tấn công phù hợp. Nó sẽ mạnh mẽ hơn sau mỗi Giai Đoạn.",
            "effects": {
                "{2d6883d7}": 0.20000000298023224,
                "{8715634f}": 475,
                "{92c6e7f9}": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ImtheCarrynow_III.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Tôi Sẽ Gánh Đội",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Người Đá mang các trang bị tấn công phù hợp. Nó sẽ mạnh mẽ hơn sau mỗi Giai Đoạn.",
                "effects": {
                    "{2d6883d7}": 0.20000000298023224,
                    "{8715634f}": 475,
                    "{92c6e7f9}": null
                }
            },
            "_key": "TFT_Augment_ImTheCarryNow",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/ImtheCarrynow_III.TFT_Set12.png"
        },
        {
            "apiName": "TFT11_Augment_FineVintage",
            "associatedTraits": [],
            "composition": [],
            "desc": "Các trang bị hoàn chỉnh để ở hàng dự bị trong 4 vòng sẽ biến thành Gói Trang Bị&nbsp;Hỗ Trợ.",
            "effects": {
                "rounds": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/FineVintage_I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đồ Cổ Quý Giá",
            "unique": false,
            "org": {
                "desc": "Các trang bị hoàn chỉnh để ở hàng dự bị trong @Rounds@ vòng sẽ biến thành Gói Trang Bị&nbsp;Hỗ Trợ.",
                "effects": {
                    "rounds": 4
                }
            },
            "_key": "TFT11_Augment_FineVintage",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/FineVintage_I.png"
        },
        {
            "apiName": "TFT9_Augment_TiniestTitanPlus",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 2 máu linh thú và 1 vàng sau mỗi vòng giao tranh người chơi. Linh thú của bạn cũng sẽ di chuyển nhanh hơn.<br><br>Lập tức nhận 15 vàng.",
            "effects": {
                "Gold": 1,
                "Heal": 2,
                "InitialGold": 15
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tiniest-TitanIII.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Khổng Lồ Tí Hon+",
            "unique": false,
            "org": {
                "desc": "Nhận @Heal@ máu linh thú và @Gold@ vàng sau mỗi vòng giao tranh người chơi. Linh thú của bạn cũng sẽ di chuyển nhanh hơn.<br><br>Lập tức nhận @InitialGold@ vàng.",
                "effects": {
                    "Gold": 1,
                    "Heal": 2,
                    "InitialGold": 15
                }
            },
            "_key": "TFT9_Augment_TiniestTitanPlus",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Tiniest-TitanIII.png"
        },
        {
            "apiName": "TFT_Augment_PairOfFours",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nếu đội của bạn có chính xác 2 tướng 4 vàng, họ nhận được 404 Máu và 24% Tốc Độ Đánh. Nhận 1 tướng 4 vàng ngẫu nhiên.",
            "effects": {
                "AttackSpeed": 0.24400000274181366,
                "Health": 404,
                "NumChampsToGrant": 1,
                "NumCopies": 2,
                "Tier": 4,
                "{96f9e378}": 1,
                "{d5279bbe}": 4,
                "{ea12e1ed}": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/PairofFours_II.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cặp Đôi Bậc 4",
            "unique": false,
            "org": {
                "desc": "Nếu đội của bạn có chính xác @NumCopies@ tướng 4 vàng, họ nhận được @Health@ Máu và @AttackSpeed*100@% Tốc Độ Đánh. Nhận 1 tướng 4 vàng ngẫu nhiên.",
                "effects": {
                    "AttackSpeed": 0.24400000274181366,
                    "Health": 404,
                    "NumChampsToGrant": 1,
                    "NumCopies": 2,
                    "Tier": 4,
                    "{96f9e378}": 1,
                    "{d5279bbe}": 4,
                    "{ea12e1ed}": 1
                }
            },
            "_key": "TFT_Augment_PairOfFours",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/PairofFours_II.TFT_Set13.png"
        },
        {
            "apiName": "TFT_Augment_CategoryFive",
            "associatedTraits": [],
            "composition": [],
            "desc": "Nhận 1 Cuồng Cung Runaan. Cuồng Cung Runaan của bạn bắn ra thêm 1 tia đạn, mỗi tia gây 85% sát thương gốc.",
            "effects": {
                "AS": null,
                "TotalDamage": 0.8500000238418579,
                "additionalbolts": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/CategoryFive_II.TFT_Set12.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Siêu Bão Đổ Bộ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Cuồng Cung Runaan. Cuồng Cung Runaan của bạn bắn ra thêm @additionalbolts@ tia đạn, mỗi tia gây @TotalDamage*100@% sát thương gốc.",
                "effects": {
                    "AS": null,
                    "TotalDamage": 0.8500000238418579,
                    "additionalbolts": 1
                }
            },
            "_key": "TFT_Augment_CategoryFive",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/CategoryFive_II.TFT_Set12.png"
        },
        {
            "apiName": "TFT11_Augment_Epoch",
            "associatedTraits": [],
            "composition": [],
            "desc": "Ngay lập tức, và khi bắt đầu mỗi giai đoạn, nhận 6 XP và 2 lượt đổi miễn phí.",
            "effects": {
                "Rerolls": 2,
                "XP": 6
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Epoch_II.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kỷ Nguyên",
            "unique": false,
            "org": {
                "desc": "Ngay lập tức, và khi bắt đầu mỗi giai đoạn, nhận @XP@ XP và @Rerolls@ lượt đổi miễn phí.",
                "effects": {
                    "Rerolls": 2,
                    "XP": 6
                }
            },
            "_key": "TFT11_Augment_Epoch",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Epoch_II.png"
        },
        {
            "apiName": "TFT_Augment_AllForOneI",
            "associatedTraits": [],
            "composition": [],
            "desc": "Đội của bạn nhận thêm 2% Máu tối đa và 2% Khuếch Đại Sát Thương với mỗi tướng 1 vàng khác nhau trên bàn đấu của bạn. Nhận 2 tướng 1 vàng.",
            "effects": {
                "DamageAmp": 0.014999999664723873,
                "Durability": null,
                "NumChampsToGrant": 2,
                "NumCopies": null,
                "PercHP": 0.019999999552965164,
                "Tier": 1,
                "{96f9e378}": null,
                "{d5279bbe}": 1,
                "{ea12e1ed}": null
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/AllForOne_I.TFT_Set13.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Một Cho Tất Cả I",
            "unique": false,
            "org": {
                "desc": "Đội của bạn nhận thêm @PercHP*100@% Máu tối đa và @DamageAmp*100@% Khuếch Đại Sát Thương với mỗi tướng 1 vàng khác nhau trên bàn đấu của bạn. Nhận @NumChampsToGrant@ tướng 1 vàng.",
                "effects": {
                    "DamageAmp": 0.014999999664723873,
                    "Durability": null,
                    "NumChampsToGrant": 2,
                    "NumCopies": null,
                    "PercHP": 0.019999999552965164,
                    "Tier": 1,
                    "{96f9e378}": null,
                    "{d5279bbe}": 1,
                    "{ea12e1ed}": null
                }
            },
            "_key": "TFT_Augment_AllForOneI",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/AllForOne_I.TFT_Set13.png"
        },
        {
            "apiName": "TFT6_Augment_PandorasItems",
            "associatedTraits": [],
            "composition": [],
            "desc": "Bắt đầu vòng đấu: Các trang bị trên hàng dự bị được đánh tráo ngẫu nhiên. <br><br>Nhận 1 trang bị thành phần ngẫu nhiên.",
            "effects": {
                "NumComponents": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pandora1.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hộp Pandora",
            "unique": false,
            "org": {
                "desc": "Bắt đầu vòng đấu: Các trang bị trên hàng dự bị được đánh tráo ngẫu nhiên. <br><br>Nhận @NumComponents@ trang bị thành phần ngẫu nhiên.",
                "effects": {
                    "NumComponents": 1
                }
            },
            "_key": "TFT6_Augment_PandorasItems",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Pandora1.png"
        },
        {
            "apiName": "TFT6_Augment_PortableForge",
            "associatedTraits": [],
            "composition": [],
            "desc": "Chọn 1 trong 4 Tạo Tác.<br><br><rules>Tạo Tác là những trang bị mạnh mẽ hơn với hiệu ứng đặc biệt.</rules>",
            "effects": {
                "ArmoryChoiceCount": 4
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/PortableForge2.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lò Rèn Thần Thoại",
            "unique": false,
            "org": {
                "desc": "Chọn 1 trong @ArmoryChoiceCount@ Tạo Tác.<br><br><rules>Tạo Tác là những trang bị mạnh mẽ hơn với hiệu ứng đặc biệt.</rules>",
                "effects": {
                    "ArmoryChoiceCount": 4
                }
            },
            "_key": "TFT6_Augment_PortableForge",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/PortableForge2.png"
        },
        {
            "apiName": "TFT9_Augment_LongTimeCrafting",
            "associatedTraits": [],
            "composition": [],
            "desc": "Sau 8 giao tranh với người chơi, nhận 1 Gói Trang Bị Tạo Tác. <br><br><rules>Gói này sẽ đưa ra 4 lựa chọn. Tạo Tác là những trang bị mạnh mẽ hơn với hiệu ứng đặc biệt.</rules>",
            "effects": {
                "Numberofcombats": 8
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Long-time-Crafting-I.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Lò Rèn Tiềm Ẩn",
            "unique": false,
            "org": {
                "desc": "Sau @NumberOfCombats@ giao tranh với người chơi, nhận 1 Gói Trang Bị Tạo Tác. <br><br><rules>Gói này sẽ đưa ra 4 lựa chọn. Tạo Tác là những trang bị mạnh mẽ hơn với hiệu ứng đặc biệt.</rules>",
                "effects": {
                    "Numberofcombats": 8
                }
            },
            "_key": "TFT9_Augment_LongTimeCrafting",
            "tier": "silver",
            "imageUrl": "https://s-tft-api.op.gg/img/set/13/tft-augment/Long-time-Crafting-I.png"
        },
        {
            "apiName": "TFT4_Augment_VanguardCrown",
            "associatedTraits": [
                "TFT4_Vanguard"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Tiên Phong, 1 Áo Choàng Gai và 1 Nautilus.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Vanguard_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Tiên Phong",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Tiên Phong, 1 Áo Choàng Gai và 1 Nautilus.",
                "effects": {}
            },
            "_key": "TFT4_Augment_VanguardCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/vanguard_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Warlord",
            "associatedTraits": [
                "TFT4_Warlord"
            ],
            "composition": [],
            "desc": "Khi bắt đầu giao tranh, Chiến Tướng đã gây nhiều sát thương nhất ở giao tranh trước sẽ trở thành Bạo Chúa. Bạo Chúa nhận thêm 25% Khuếch Đại Sát Thương. Nhận 1 Jarvan IV và 1 Nidalee.",
            "effects": {
                "BonusDamage": 25
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tyrannical-Warlord_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Chiến Tướng Bạo Chúa",
            "unique": false,
            "org": {
                "desc": "Khi bắt đầu giao tranh, Chiến Tướng đã gây nhiều sát thương nhất ở giao tranh trước sẽ trở thành Bạo Chúa. Bạo Chúa nhận thêm 25% Khuếch Đại Sát Thương. Nhận 1 Jarvan IV và 1 Nidalee.",
                "effects": {
                    "BonusDamage": 25
                }
            },
            "_key": "TFT4_Augment_Warlord",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/tyrannical-warlord_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_ElderwoodCrown",
            "associatedTraits": [
                "TFT4_Elderwood"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thần Rừng, 1 Giáp Máu Warmog và 1 Rakan.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Elderwood_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Thần Rừng",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thần Rừng, 1 Giáp Máu Warmog và 1 Rakan.",
                "effects": {}
            },
            "_key": "TFT4_Augment_ElderwoodCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/elderwood_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Cultist",
            "associatedTraits": [
                "TFT4_Cultist"
            ],
            "composition": [],
            "desc": "Với mỗi Vàng vượt hơn 40 mà bạn có trong giai đoạn dàn trận, Galio sẽ nhận vĩnh viễn 5 máu, tối đa 600 máu. Nhận 1 Twisted Fate và 1 Pyke. <br>(Máu Nhận Thêm:&nbsp;0)",
            "effects": {
                "MinimumGold": 40,
                "StackCap": 600,
                "{39ea6827}": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cults-Offering_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hiến Tế Cuồng Giáo",
            "unique": false,
            "org": {
                "desc": "Với mỗi Vàng vượt hơn 40 mà bạn có trong giai đoạn dàn trận, Galio sẽ nhận vĩnh viễn 5 máu, tối đa 600 máu. Nhận 1 Twisted Fate và 1 Pyke. <br>(Máu Nhận Thêm:&nbsp;0)",
                "effects": {
                    "MinimumGold": 40,
                    "StackCap": 600,
                    "{39ea6827}": 5
                }
            },
            "_key": "TFT4_Augment_Cultist",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/cults-offering_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_CultistCrown",
            "associatedTraits": [
                "TFT4_Cultist"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Cuồng Giáo, 1 Áo Choàng Lửa và 1 Pyke.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cultist_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Cuồng Giáo",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Cuồng Giáo, 1 Áo Choàng Lửa và 1 Pyke.",
                "effects": {}
            },
            "_key": "TFT4_Augment_CultistCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/cultist_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_DivineCrest",
            "associatedTraits": [
                "TFT4_Divine"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thánh Thần và 1 Jax.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Divine_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Thánh Thần",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thánh Thần và 1 Jax.",
                "effects": {}
            },
            "_key": "TFT4_Augment_DivineCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/divine_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_SlayerCrest",
            "associatedTraits": [
                "TFT4_Slayer"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Đồ Tể và 1 Zed.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Slayer_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Đồ Tể",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Đồ Tể và 1 Zed.",
                "effects": {}
            },
            "_key": "TFT4_Augment_SlayerCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/slayer_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_SpiritCrown",
            "associatedTraits": [
                "TFT4_Spirit"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Linh Hồn, 1 Nanh Nashor và 1 Teemo.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Spirit_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Linh Hồn",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Linh Hồn, 1 Nanh Nashor và 1 Teemo.",
                "effects": {}
            },
            "_key": "TFT4_Augment_SpiritCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/spirit_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Fortune",
            "associatedTraits": [
                "TFT4_Fortune"
            ],
            "composition": [],
            "desc": "Khi Thần Tài đang kích hoạt, nhận một Cây Tài Lộc trợ giúp bạn trong giao tranh và sinh vàng tùy theo nó đứng ở hàng trên hay hàng sau. Nhận 1 Tahm Kench và 1 Annie. ",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Money-Sprout_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cây Tài Lộc",
            "unique": false,
            "org": {
                "desc": "Khi Thần Tài đang kích hoạt, nhận một Cây Tài Lộc trợ giúp bạn trong giao tranh và sinh vàng tùy theo nó đứng ở hàng trên hay hàng sau. Nhận 1 Tahm Kench và 1 Annie. ",
                "effects": {}
            },
            "_key": "TFT4_Augment_Fortune",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/money-sprout_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_WukongCarry",
            "associatedTraits": [
                "TFT4_Fabled"
            ],
            "composition": [],
            "desc": "Nhận 1 Ngộ Không 2 sao, Ngộ Không mạnh nhất của bạn trở thành Truyền Thuyết. Khi Truyền Thuyết được kích hoạt và nâng lên 3 sao, Ngộ Không sẽ lấy lại được hào quang đã mất. ",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Fabled-One_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hầu Vương Trong Truyền Thuyết",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ngộ Không 2 sao, Ngộ Không mạnh nhất của bạn trở thành Truyền Thuyết. Khi Truyền Thuyết được kích hoạt và nâng lên 3 sao, Ngộ Không sẽ lấy lại được hào quang đã mất. ",
                "effects": {}
            },
            "_key": "TFT4_Augment_WukongCarry",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/fabled-one_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_SyphonerCrest",
            "associatedTraits": [
                "TFT4_Syphoner"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Hấp Huyết và 1 Vladimir.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Syphoner_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Hấp Huyết",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Hấp Huyết và 1 Vladimir.",
                "effects": {}
            },
            "_key": "TFT4_Augment_SyphonerCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/syphoner_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Exile",
            "associatedTraits": [
                "TFT4_Exile"
            ],
            "composition": [],
            "desc": "Nhận 1 Yasuo và 1 Yone. Yone này không thể được triển khai cho đến Giai Đoạn 5 hoặc cho đến khi Yasuo có 30 mạng tiêu diệt.<br>(Hạ gục:&nbsp;0)",
            "effects": {
                "{3027adb7}": 30,
                "{3acc91d8}": 5
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Exiled-One_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Kẻ Lưu Đày",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Yasuo và 1 Yone. Yone này không thể được triển khai cho đến Giai Đoạn 5 hoặc cho đến khi Yasuo có 30 mạng tiêu diệt.<br>(Hạ gục:&nbsp;0)",
                "effects": {
                    "{3027adb7}": 30,
                    "{3acc91d8}": 5
                }
            },
            "_key": "TFT4_Augment_Exile",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/exiled-one_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_BrawlerCrest",
            "associatedTraits": [
                "TFT4_Brawler"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Đấu Sĩ và 1 Vi.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Brawler_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Đấu Sĩ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Đấu Sĩ và 1 Vi.",
                "effects": {}
            },
            "_key": "TFT4_Augment_BrawlerCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/brawler_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_DuelistCrown",
            "associatedTraits": [
                "TFT4_Duelist"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Song Đấu, 1 Quyền Năng Khổng Lồ và 1 Jax.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Duelist_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Song Đấu",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Song Đấu, 1 Quyền Năng Khổng Lồ và 1 Jax.",
                "effects": {}
            },
            "_key": "TFT4_Augment_DuelistCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/duelist_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_KeeperCrown",
            "associatedTraits": [
                "TFT4_Keeper"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Hộ Pháp, 1 Quỷ Thư Morello và 1 Jarvan IV.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Keeper_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Hộ Pháp",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Hộ Pháp, 1 Quỷ Thư Morello và 1 Jarvan IV.",
                "effects": {}
            },
            "_key": "TFT4_Augment_KeeperCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/keeper_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_AssassinCrown",
            "associatedTraits": [
                "TFT4_Assassin"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Sát Thủ, 1 Áo Choàng Bóng Tối và 1 Pyke.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Assassin_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Sát Thủ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Sát Thủ, 1 Áo Choàng Bóng Tối và 1 Pyke.",
                "effects": {}
            },
            "_key": "TFT4_Augment_AssassinCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/assassin_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Executioner",
            "associatedTraits": [
                "TFT4_Executioner"
            ],
            "composition": [],
            "desc": "Tướng Đao Phủ sẽ hành quyết kẻ địch thấp hơn 10% Máu. Khi hành quyết có 15% xác suất rơi ra 1 vàng. Nhận 1 Kindred.",
            "effects": {
                "ExecuteThreshold": 0.10000000149011612,
                "GoldChance": 0.15000000596046448
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Executioners-Cut_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Gươm Đao Phủ",
            "unique": false,
            "org": {
                "desc": "Tướng Đao Phủ sẽ hành quyết kẻ địch thấp hơn 10% Máu. Khi hành quyết có 15% xác suất rơi ra 1 vàng. Nhận 1 Kindred.",
                "effects": {
                    "ExecuteThreshold": 0.10000000149011612,
                    "GoldChance": 0.15000000596046448
                }
            },
            "_key": "TFT4_Augment_Executioner",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/executioners-cut_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_MageCrest",
            "associatedTraits": [
                "TFT4_Mage"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Phù Thủy và 1 Lulu.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mage_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Phù Thủy",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Phù Thủy và 1 Lulu.",
                "effects": {}
            },
            "_key": "TFT4_Augment_MageCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/mage_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_DuelistCrest",
            "associatedTraits": [
                "TFT4_Duelist"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Song Đấu và 1 Jax.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Duelist_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Song Đấu",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Song Đấu và 1 Jax.",
                "effects": {}
            },
            "_key": "TFT4_Augment_DuelistCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/duelist_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_ElderwoodCrest",
            "associatedTraits": [
                "TFT4_Elderwood"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thần Rừng và 1 Rakan.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Elderwood_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Thần Rừng",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thần Rừng và 1 Rakan.",
                "effects": {}
            },
            "_key": "TFT4_Augment_ElderwoodCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/elderwood_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Slayer",
            "associatedTraits": [
                "TFT4_Slayer"
            ],
            "composition": [],
            "desc": "Mỗi khi tướng Đồ Tể của bạn nhận hoặc gây sát thương, họ nhận thêm cộng dồn 2 Giáp và Kháng Phép cho đến hết giao tranh (tối đa: 25 cộng dồn). Nhận 1 Pyke và 1 Zed.",
            "effects": {
                "BonusResistances": 2,
                "StackCap": 25
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Slayers-Resolve_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Ý Chí Đồ Tể",
            "unique": false,
            "org": {
                "desc": "Mỗi khi tướng Đồ Tể của bạn nhận hoặc gây sát thương, họ nhận thêm cộng dồn 2 Giáp và Kháng Phép cho đến hết giao tranh (tối đa: 25 cộng dồn). Nhận 1 Pyke và 1 Zed.",
                "effects": {
                    "BonusResistances": 2,
                    "StackCap": 25
                }
            },
            "_key": "TFT4_Augment_Slayer",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/slayers-resolve_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_EnlightenedCrown",
            "associatedTraits": [
                "TFT4_Enlightened"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Khai Sáng, 1 Ngọn Giáo Shojin và 1 Janna.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Enlightened_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Khai Sáng",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Khai Sáng, 1 Ngọn Giáo Shojin và 1 Janna.",
                "effects": {}
            },
            "_key": "TFT4_Augment_EnlightenedCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/enlightened_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_SlayerCrown",
            "associatedTraits": [
                "TFT4_Slayer"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Đồ Tể, 1 Bàn Tay Công Lý và 1 Zed.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Slayer_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Đồ Tể",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Đồ Tể, 1 Bàn Tay Công Lý và 1 Zed.",
                "effects": {}
            },
            "_key": "TFT4_Augment_SlayerCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/slayer_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Divine",
            "associatedTraits": [
                "TFT4_Divine"
            ],
            "composition": [],
            "desc": "Khi Thăng Hoa, tướng Thánh Thần đồng thời nhận thêm 25% Tốc Độ Đánh. Nhận 1 Nasus.",
            "effects": {
                "BonusAS": 0.25
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Divine-Zeal_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Nhiệt Huyết Thánh Thần",
            "unique": false,
            "org": {
                "desc": "Khi Thăng Hoa, tướng Thánh Thần đồng thời nhận thêm 25% Tốc Độ Đánh. Nhận 1 Nasus.",
                "effects": {
                    "BonusAS": 0.25
                }
            },
            "_key": "TFT4_Augment_Divine",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/divine-zeal_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_WarlordCrest",
            "associatedTraits": [
                "TFT4_Warlord"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Chiến Tướng và 1 Vi.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Warlord_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Chiến Tướng",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Chiến Tướng và 1 Vi.",
                "effects": {}
            },
            "_key": "TFT4_Augment_WarlordCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/warlord_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_FortuneCrown",
            "associatedTraits": [
                "TFT4_Fortune"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thần Tài, 1 Thú Tượng Thạch Giáp và 1 Annie.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Fortune_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Thần Tài",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thần Tài, 1 Thú Tượng Thạch Giáp và 1 Annie.",
                "effects": {}
            },
            "_key": "TFT4_Augment_FortuneCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/fortune_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Elderwood",
            "associatedTraits": [
                "TFT4_Elderwood"
            ],
            "composition": [],
            "desc": "Tướng Thần Rừng nhận thêm 100 Máu tối đa (tối đa 500) với mỗi vòng đấu họ ở nguyên tại ô ban đầu được triển khai. Nhận 1 Maokai và 1 Lulu.",
            "effects": {
                "Health": 100,
                "MaxHealth": 500
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Growing-Roots_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Cắm Rễ Tăng Trưởng",
            "unique": false,
            "org": {
                "desc": "Tướng Thần Rừng nhận thêm 100 Máu tối đa (tối đa 500) với mỗi vòng đấu họ ở nguyên tại ô ban đầu được triển khai. Nhận 1 Maokai và 1 Lulu.",
                "effects": {
                    "Health": 100,
                    "MaxHealth": 500
                }
            },
            "_key": "TFT4_Augment_Elderwood",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/growing-roots_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_VanguardCrest",
            "associatedTraits": [
                "TFT4_Vanguard"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Tiên Phong và 1 Nautilus.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Vanguard_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Tiên Phong",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Tiên Phong và 1 Nautilus.",
                "effects": {}
            },
            "_key": "TFT4_Augment_VanguardCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/vanguard_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_DragonsoulCrown",
            "associatedTraits": [
                "TFT4_Dragonsoul"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Long Tộc, 1 Nỏ Sét và 1 Braum.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragonsoul_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Long Tộc",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Long Tộc, 1 Nỏ Sét và 1 Braum.",
                "effects": {}
            },
            "_key": "TFT4_Augment_DragonsoulCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/dragonsoul_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_AssassinCrest",
            "associatedTraits": [
                "TFT4_Assassin"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Sát Thủ và 1 Pyke.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Assassin_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Sát Thủ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Sát Thủ và 1 Pyke.",
                "effects": {}
            },
            "_key": "TFT4_Augment_AssassinCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/assassin_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_SpiritCrest",
            "associatedTraits": [
                "TFT4_Spirit"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Linh Hồn và 1 Teemo.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Spirit_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Linh Hồn",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Linh Hồn và 1 Teemo.",
                "effects": {}
            },
            "_key": "TFT4_Augment_SpiritCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/spirit_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_DivineCrown",
            "associatedTraits": [
                "TFT4_Divine"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thánh Thần, 1 Áo Choàng Thủy Ngân và 1 Jax.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Divine_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Thánh Thần",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thánh Thần, 1 Áo Choàng Thủy Ngân và 1 Jax.",
                "effects": {}
            },
            "_key": "TFT4_Augment_DivineCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/divine_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_SyphonerCrown",
            "associatedTraits": [
                "TFT4_Syphoner"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Hấp Huyết, 1 Mũ Thích Nghi và 1 Vladimir.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Syphoner_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Hấp Huyết",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Hấp Huyết, 1 Mũ Thích Nghi và 1 Vladimir.",
                "effects": {}
            },
            "_key": "TFT4_Augment_SyphonerCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/syphoner_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_MageCrown",
            "associatedTraits": [
                "TFT4_Mage"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Phù Thủy, 1 Găng Bảo Thạch và 1 Lulu.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mage_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Phù Thủy",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Phù Thủy, 1 Găng Bảo Thạch và 1 Lulu.",
                "effects": {}
            },
            "_key": "TFT4_Augment_MageCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/mage_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_EnlightenedCrest",
            "associatedTraits": [
                "TFT4_Enlightened"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Khai Sáng và 1 Janna.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Enlightened_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Khai Sáng",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Khai Sáng và 1 Janna.",
                "effects": {}
            },
            "_key": "TFT4_Augment_EnlightenedCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/enlightened_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Sharpshooter",
            "associatedTraits": [
                "TFT4_Sharpshooter"
            ],
            "composition": [],
            "desc": "Đòn đánh từ Thiện Xạ nảy thêm 1 lần và gây 40% sát thương ban đầu. Nhận 1 Tristana và 1 Teemo.",
            "effects": {
                "DamageReduction": 0.4000000059604645,
                "ExtraBounces": 1
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/LuckyRicochet_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Đạn Nảy Bật",
            "unique": false,
            "org": {
                "desc": "Đòn đánh từ Thiện Xạ nảy thêm 1 lần và gây 40% sát thương ban đầu. Nhận 1 Tristana và 1 Teemo.",
                "effects": {
                    "DamageReduction": 0.4000000059604645,
                    "ExtraBounces": 1
                }
            },
            "_key": "TFT4_Augment_Sharpshooter",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/luckyricochet_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_BrawlerCrown",
            "associatedTraits": [
                "TFT4_Brawler"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Đấu Sĩ, 1 Huyết Kiếm và 1 Vi.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Brawler_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Đấu Sĩ",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Đấu Sĩ, 1 Huyết Kiếm và 1 Vi.",
                "effects": {}
            },
            "_key": "TFT4_Augment_BrawlerCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/brawler_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_CultistCrest",
            "associatedTraits": [
                "TFT4_Cultist"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Cuồng Giáo và 1 Pyke.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cultist_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Cuồng Giáo",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Cuồng Giáo và 1 Pyke.",
                "effects": {}
            },
            "_key": "TFT4_Augment_CultistCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/cultist_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_Dragonsoul",
            "associatedTraits": [
                "TFT4_Dragonsoul"
            ],
            "composition": [],
            "desc": "Sau 8 giây giao tranh, Long Vương sẽ công kích bàn đấu, gây 20% Máu tối đa thành sát thương phép lên kẻ địch và ban cho tất cả đồng minh 12% Tốc Độ Đánh cho đến hết giao tranh. Nhận 1 Tristana và 1 Braum.",
            "effects": {
                "ASDuration": 60,
                "AttackSpeedBuff": 0.11999999731779099,
                "DelayTime": 8,
                "TrueDamageHPRatio": 0.20000000298023224
            },
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Mother-Dragon-Breath_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Hơi Thở Long Mẫu",
            "unique": false,
            "org": {
                "desc": "Sau 8 giây giao tranh, Long Vương sẽ công kích bàn đấu, gây 20% Máu tối đa thành sát thương phép lên kẻ địch và ban cho tất cả đồng minh 12% Tốc Độ Đánh cho đến hết giao tranh. Nhận 1 Tristana và 1 Braum.",
                "effects": {
                    "ASDuration": 60,
                    "AttackSpeedBuff": 0.11999999731779099,
                    "DelayTime": 8,
                    "TrueDamageHPRatio": 0.20000000298023224
                }
            },
            "_key": "TFT4_Augment_Dragonsoul",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/mother-dragon-breath_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_KeeperCrest",
            "associatedTraits": [
                "TFT4_Keeper"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Hộ Pháp và 1 Jarvan IV.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Keeper_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Hộ Pháp",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Hộ Pháp và 1 Jarvan IV.",
                "effects": {}
            },
            "_key": "TFT4_Augment_KeeperCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/keeper_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_WarlordCrown",
            "associatedTraits": [
                "TFT4_Warlord"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Chiến Tướng, 1 Móng Vuốt Sterak và 1 Vi.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Warlord_III.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Vương Miện Chiến Tướng",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Chiến Tướng, 1 Móng Vuốt Sterak và 1 Vi.",
                "effects": {}
            },
            "_key": "TFT4_Augment_WarlordCrown",
            "tier": "prism",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/warlord_iii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_DragonsoulCrest",
            "associatedTraits": [
                "TFT4_Dragonsoul"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Long Tộc và 1 Braum.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dragonsoul_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Long Tộc",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Long Tộc và 1 Braum.",
                "effects": {}
            },
            "_key": "TFT4_Augment_DragonsoulCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/dragonsoul_ii.tft_set4_5_revival.png",
            "revival": true
        },
        {
            "apiName": "TFT4_Augment_FortuneCrest",
            "associatedTraits": [
                "TFT4_Fortune"
            ],
            "composition": [],
            "desc": "Nhận 1 Ấn Thần Tài và 1 Annie.",
            "effects": {},
            "from": null,
            "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Fortune_II.TFT_Set4_5_Revival.tex",
            "id": null,
            "incompatibleTraits": [],
            "name": "Huy Hiệu Thần Tài",
            "unique": false,
            "org": {
                "desc": "Nhận 1 Ấn Thần Tài và 1 Annie.",
                "effects": {}
            },
            "_key": "TFT4_Augment_FortuneCrest",
            "tier": "gold",
            "imageUrl": "https://s-tft-api.op.gg/img/set/4.5/tft-augment/fortune_ii.tft_set4_5_revival.png",
            "revival": true
        }
    ],
    "tierList": [
        "silver",
        "gold",
        "prism"
    ]
}