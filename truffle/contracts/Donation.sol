// SPDX-License-Identifier: MIT
pragma solidity >=0.4.23;
pragma experimental ABIEncoderV2;

contract Donation {
  struct Info{
    string Sender;
    string Recipient;
    string donationPrice;
  }

  mapping(uint256=>Info[]) private donationList;

  function getDonation(uint256 postId, address RecipientAddress, string memory Sender, string memory Recipient, string memory donationPrice )public payable{
    payable(RecipientAddress).transfer(msg.value);
    donationList[postId].push(Info(Sender,Recipient,donationPrice));
  }

  function getChracterMapping(uint256 postId)  public view returns(Info[] memory){
    return donationList[postId];
  }
}
