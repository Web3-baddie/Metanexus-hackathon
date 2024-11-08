// backend_api.rs
use actix_web::{web, App, HttpServer, Responder, HttpResponse};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct GameData {
    game_id: u64,
    name: String,
    description: String,
}

#[derive(Serialize, Deserialize)]
struct UserData {
    user_id: String,
    balance: f64,
}

async fn get_game_data() -> impl Responder {
    let game = GameData {
        game_id: 1,
        name: "CryptoKitties".to_string(),
        description: "Collect and breed virtual cats.".to_string(),
    };
    HttpResponse::Ok().json(game)
}

async fn get_user_data(user_id: web::Path<String>) -> impl Responder {
    let user_data = UserData {
        user_id: user_id.into_inner(),
        balance: 100.0,
    };
    HttpResponse::Ok().json(user_data)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/game", web::get().to(get_game_data))
            .route("/user/{user_id}", web::get().to(get_user_data))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
