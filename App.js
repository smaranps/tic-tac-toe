import React, { useState } from "react";
import { TouchableOpacity, View, Text, Button } from "react-native";

export default function App() {
  const emptyBoard = 
  {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  }

  const [board, setBoard] = useState(emptyBoard);
  const [winner,setWinner]= useState()
  const [playerTurn, setPlayerTurn] = useState("X");

  const checkWinner = (board) => {
   if (
      board[1] === board[2] &&
      board[2] === board[3] &&
      board[3] === playerTurn
    ) {
     setWinner(`${playerTurn} wins the game.`) 
     
    }
    else if (
      board[4] === board[5] &&
      board[5] === board[6] &&
      board[6] === playerTurn
    ) {
      setWinner(`${playerTurn} wins the game.`) 
      alert(`${playerTurn} wins the game`);
    }
   else if (
      board[7] === board[8] &&
      board[8] === board[9] &&
      board[9] === playerTurn
    ) {
      alert(`${playerTurn} wins the game`);
    }
     else if (
      board[1] === board[4] &&
      board[4] === board[7] &&
      board[7] === playerTurn
    ) {
      alert(`${playerTurn} wins the game`);
    }
     else if (
      board[3] === board[6] &&
      board[6] === board[9] &&
      board[9] === playerTurn
    ) {
      alert(`${playerTurn} wins the game`);
    }
    else if (
      board[2] === board[5] &&
      board[5] === board[8] &&
      board[8] === playerTurn
    ) {
      alert(`${playerTurn} wins the game`);
      
    }
    else if (
      board[1] === board[5] &&
      board[5] === board[9] &&
      board[9] === playerTurn
    ) {
      alert(`${playerTurn} wins the game`);
    }
    if (
      board[2] === board[5] &&
      board[5] === board[8] &&
      board[8] === playerTurn
    ) {
      alert(`${playerTurn} wins the game`);
    }
   else if (
      board[3] === board[5] &&
      board[5] === board[7] &&
      board[7] === playerTurn
    ) {
      alert(`${playerTurn} wins the game`);
    }
  };

  const restart = () => {
    setBoard(emptyBoard)
    setPlayerTurn("X")
    setWinner("")
  }


  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          backgroundColor: "red",
        }}
      >
        Tic-Tac-Toe Game
      </Text>
      <br />
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        {
          winner === "" ? `${playerTurn}'s Turn` : winner
        }
        
      </Text>

      <Button
        color="#E78895"
        title="Restart"
        onPress={restart}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Object.keys(board).map((box) => {
          return (
            <TouchableOpacity
              style={{
                borderColor: "Black",
                borderWidth: 4,
                height: 200,
                width: "30%",
                alignItems: "center",
              }}
              onPress={() => {
                if (board[box] === "" && winner === "") {
                  let copyBoard = { ...board }; // creates object in new memory location
                  copyBoard[box] = playerTurn;
                  console.log("Copy board:", copyBoard);
                  setBoard(copyBoard);
                  if (playerTurn === "X" ) {
                    setPlayerTurn("O");
                  } else {
                    setPlayerTurn("X");
                  }
                  checkWinner(copyBoard);
                }
              }}
            >
              <Text style={{ fontSize: 100, textAlign: "center" }}>
                {board[box]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

}