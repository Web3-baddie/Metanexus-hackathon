// lib.rs
#![cfg_attr(not(test), no_std)]

// Include the different modules of your Meta Nexus platform
mod playtoken_contract;
mod nft_contract;
mod betting_contract;

// Re-export the modules to make them accessible
pub use playtoken_contract::playtoken::PlayToken;
pub use nft_contract::nft::NftContract;
pub use betting_contract::betting::BettingContract;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        // Add basic tests or integration tests here
    }
}
