// nft_contract.rs
#![cfg_attr(not(test), no_std)]

pub use pallet_contracts::{Contracts, Call};

#[ink::contract]
mod nft {
    #[ink::storage]
    pub struct NftContract {
        next_token_id: u64,
        owner: AccountId,
    }

    #[ink(event)]
    pub struct NftCreated {
        #[ink(topic)]
        token_id: u64,
        owner: AccountId,
    }

    impl NftContract {
        #[ink(constructor)]
        pub fn new(owner: AccountId) -> Self {
            Self { next_token_id: 0, owner }
        }

        #[ink(message)]
        pub fn create_nft(&mut self) -> u64 {
            let token_id = self.next_token_id;
            self.next_token_id += 1;
            self.env().emit_event(NftCreated { token_id, owner: self.owner.clone() });
            token_id
        }

        #[ink(message)]
        pub fn transfer_nft(&mut self, token_id: u64, new_owner: AccountId) {
            // Handle transfer logic
        }
    }
}
