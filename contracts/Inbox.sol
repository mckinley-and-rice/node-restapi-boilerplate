pragma solidity >=0.4.22 <0.7.0;
contract Inbox {
    string public message;
    string[] tasks;
    function contructor(string memory initialMessage) public {
        message = initialMessage;
    }
    function setMessage(string memory taskName) public {
        tasks.push(taskName);
    }
    function getMessage(uint256 i) public view returns (string memory) {
        return tasks[i];
    }
}
