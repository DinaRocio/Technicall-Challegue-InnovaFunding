
import "../stylesheets/LogoutModal.css";


function BoardItem({ goto, databoard }) {
  const myBoards = databoard.filter((board) => board.myBoards === true);
  const otherBoards = databoard.filter((board) => board.myBoards !== true);
  


  return (
    <>
      <section className="boards_section">
        <h2 className="boards_section__titles">My Boards</h2>
        <ul className="my_boards board_grid">
          {myBoards.map((myBoard) => {
            console.log(myBoard)
            return (
              <li className="board_li" key={myBoard.id} >
                <div
                  className="boardItem"
                  onClick={() => goto(myBoard.id, "showBoard")}
                >
                  <p className="board_text">{myBoard.title}</p>
                  <ul className="colaborator_list">
                    {myBoard.colaborators.map((colaborator) => {

                      return (
                        <li className="colaborator_item" key={colaborator.id}>
                          <div className="colaborator_picture">
                            <img src={colaborator.picture} alt="pic" />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <h2 className="boards_section__titles">Other Boards</h2>
        <ul className="other_boards board_grid">
          {otherBoards.map((otherBoard) => {
            return (
              <li className="board_li" key={otherBoard.id}>
                <div className="boardItem" onClick={() => goto(otherBoard.id, "showBoard")}>
                  <p className="board_text">{otherBoard.title}</p>
                  <ul className="colaborator_list">
                    {otherBoard.colaborators.map((colaborator) => {
                      return (
                        <li className="colaborator_item" key={colaborator.id}>
                          <div className="colaborator_picture">
                            <img src={colaborator.picture} alt="pic" />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      {/* <LogoutModal /> */}
    </>
  );
}

export default BoardItem;
