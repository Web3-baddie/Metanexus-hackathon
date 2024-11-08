// betting_contract.rs
#![cfg_attr(not(test), no_std)]

#[ink::contract]
mod betting {
    #[ink::storage]
    pub struct BettingContract {
        users_bet: ink_storage::collections::HashMap<AccountId, u64>,
        total_pot: u64,
    }

    #[ink(event)]
    pub struct BetPlaced {
        #[ink(topic)]
        user: AccountId,
        bet_amount: u64,
    }

    impl BettingContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                users_bet: Default::default(),
                total_pot: 0,
            }
        }

        #[ink(message)]
        pub fn place_bet(&mut self, bet_amount: u64) {
            let caller = self.env().caller();
            self.users_bet.insert(caller, bet_amount);
            self.total_pot += bet_amount;
            self.env().emit_event(BetPlaced { user: caller, bet_amount });
        }

        #[ink(message)]
        pub fn distribute_winnings(&mut self, winner: AccountId) {
            // Logic to distribute winnings
            if let Some(bet) = self.users_bet.get(&winner) {
                // Transfer winnings to the winner
            }
        }
    }
}
