// SPDX-License-Identifier: MIT
pragma solidity >=0.4.23;
pragma experimental ABIEncoderV2;

contract Donation {
  struct Info{
    string Sender;
    string Recipient;
    string donationPrice;
  }

  event DonationLogText(string Sender, string Recipient, string donationPrice);

  function getDonation(address RecipientAddress, string memory Sender, string memory Recipient, string memory donationPrice   )public payable{
    payable(RecipientAddress).transfer(msg.value);
    emit DonationLogText(Sender ,Recipient , donationPrice );
  }
}
