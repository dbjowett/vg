package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)
var JSON = `[
	{
			"id": 119133,
			"name": "Elden Ring",
			"cover": {
					"id": 212094,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 96.1559660269736,
			"first_release_date": 1645747200
	},
	{
			"id": 1454,
			"name": "Suikoden II",
			"cover": {
					"id": 90946,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co1y6a.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 15,
							"name": "Strategy"
					}
			],
			"total_rating": 95.89823405246271,
			"first_release_date": 913852800
	},
	{
			"id": 119171,
			"name": "Baldur's Gate 3",
			"cover": {
					"id": 289025,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co670h.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 15,
							"name": "Strategy"
					},
					{
							"id": 16,
							"name": "Turn-based strategy (TBS)"
					},
					{
							"id": 24,
							"name": "Tactical"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 95.26894988100655,
			"first_release_date": 1691020800
	},
	{
			"id": 7346,
			"name": "The Legend of Zelda: Breath of the Wild",
			"cover": {
					"id": 172453,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg"
			},
			"genres": [
					{
							"id": 9,
							"name": "Puzzle"
					},
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 95.16263923458183,
			"first_release_date": 1488499200
	},
	{
			"id": 119388,
			"name": "The Legend of Zelda: Tears of the Kingdom",
			"cover": {
					"id": 274264,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 94.76319139745874,
			"first_release_date": 1683849600
	},
	{
			"id": 19560,
			"name": "God of War",
			"cover": {
					"id": 85062,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 25,
							"name": "Hack and slash/Beat 'em up"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 94.42415626084363,
			"first_release_date": 1524182400
	},
	{
			"id": 25076,
			"name": "Red Dead Redemption 2",
			"cover": {
					"id": 80403,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg"
			},
			"genres": [
					{
							"id": 5,
							"name": "Shooter"
					},
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 93.53080914418913,
			"first_release_date": 1540512000
	},
	{
			"id": 74,
			"name": "Mass Effect 2",
			"cover": {
					"id": 93684,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co20ac.jpg"
			},
			"genres": [
					{
							"id": 5,
							"name": "Shooter"
					},
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 93.46729375713316,
			"first_release_date": 1264464000
	},
	{
			"id": 112875,
			"name": "God of War Ragnarök",
			"cover": {
					"id": 269779,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 25,
							"name": "Hack and slash/Beat 'em up"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 93.18156557074803,
			"first_release_date": 1667952000
	},
	{
			"id": 9927,
			"name": "Persona 5",
			"cover": {
					"id": 81906,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co1r76.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 16,
							"name": "Turn-based strategy (TBS)"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 93.17996467902586,
			"first_release_date": 1473897600
	},
	{
			"id": 26758,
			"name": "Super Mario Odyssey",
			"cover": {
					"id": 76371,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co1mxf.jpg"
			},
			"genres": [
					{
							"id": 8,
							"name": "Platform"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 93.03772490714613,
			"first_release_date": 1509062400
	},
	{
			"id": 26192,
			"name": "The Last of Us Part II",
			"cover": {
					"id": 279320,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg"
			},
			"genres": [
					{
							"id": 5,
							"name": "Shooter"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 93.01446834079124,
			"first_release_date": 1592524800
	},
	{
			"id": 1942,
			"name": "The Witcher 3: Wild Hunt",
			"cover": {
					"id": 89386,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 92.81553962950346,
			"first_release_date": 1431993600
	},
	{
			"id": 113112,
			"name": "Hades",
			"cover": {
					"id": 152760,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co39vc.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 25,
							"name": "Hack and slash/Beat 'em up"
					},
					{
							"id": 31,
							"name": "Adventure"
					},
					{
							"id": 32,
							"name": "Indie"
					}
			],
			"total_rating": 92.38329274399547,
			"first_release_date": 1600300800
	},
	{
			"id": 272,
			"name": "Unreal Tournament",
			"cover": {
					"id": 119351,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co2k3b.jpg"
			},
			"genres": [
					{
							"id": 5,
							"name": "Shooter"
					}
			],
			"total_rating": 92.31575168837931,
			"first_release_date": 943228800
	},
	{
			"id": 116,
			"name": "Star Wars: Knights of the Old Republic",
			"cover": {
					"id": 85067,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co1tmz.jpg"
			},
			"genres": [
					{
							"id": 12,
							"name": "Role-playing (RPG)"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 92.19161067365107,
			"first_release_date": 1058227200
	},
	{
			"id": 254339,
			"name": "Super Mario Bros. Wonder",
			"cover": {
					"id": 310593,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co6nnl.jpg"
			},
			"genres": [
					{
							"id": 8,
							"name": "Platform"
					}
			],
			"total_rating": 92.15099850673197,
			"first_release_date": 1697760000
	},
	{
			"id": 7331,
			"name": "Uncharted 4: A Thief's End",
			"cover": {
					"id": 81917,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co1r7h.jpg"
			},
			"genres": [
					{
							"id": 5,
							"name": "Shooter"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 92.00525926737905,
			"first_release_date": 1462838400
	},
	{
			"id": 72,
			"name": "Portal 2",
			"cover": {
					"id": 82660,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co1rs4.jpg"
			},
			"genres": [
					{
							"id": 5,
							"name": "Shooter"
					},
					{
							"id": 8,
							"name": "Platform"
					},
					{
							"id": 9,
							"name": "Puzzle"
					},
					{
							"id": 31,
							"name": "Adventure"
					}
			],
			"total_rating": 92.00458048205998,
			"first_release_date": 1303084800
	},
	{
			"id": 9643,
			"name": "Return of the Obra Dinn",
			"cover": {
					"id": 103077,
					"url": "//images.igdb.com/igdb/image/upload/t_cover_big/co27j9.jpg"
			},
			"genres": [
					{
							"id": 9,
							"name": "Puzzle"
					},
					{
							"id": 31,
							"name": "Adventure"
					},
					{
							"id": 32,
							"name": "Indie"
					}
			],
			"total_rating": 91.96186807348622,
			"first_release_date": 1539820800
	}
]`

type Game struct {
	ID    string `json:"id"`
	Title string `json:"title"`
}

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}

	http.HandleFunc("/api/explore", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(JSON))
	})
	http.HandleFunc("/api/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(JSON))
	})

	log.Printf("Server starting on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}