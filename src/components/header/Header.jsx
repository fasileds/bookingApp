import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

export default function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    chiledren: 0,
    room: 1,
  });
  const handelOption = (name, opretion) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: opretion === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContiner listMode" : "headerContiner"
        }
      >
        <div className="hederList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>stay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Atraction</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxsi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headeTitle">
              {" "}
              alife time of discounts? It's Geniuse
            </h1>
            <p className="headerDiscription">get reward for your taravel</p>
            <button className="headerButton">SignIn/Register</button>
            <div className="headerSerch">
              <div className="headerSerchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where Are You Going"
                  className="HeaderSerch Input"
                />
              </div>
              <div className="headerSerchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyy"
                )} `}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSerchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="headerSearchText"
                >
                  {`${option.adult} adult ${option.chiledren} childeren ${option.room} room`}
                  {openOption && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">adult</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            disabled={option.adult <= 1}
                            onClick={() => handelOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {option.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handelOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">chilidren</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            disabled={option.chiledren <= 0}
                            onClick={() => handelOption("chiledren", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {option.chiledren}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handelOption("chiledren", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">room</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            disabled={option.room <= 1}
                            onClick={() => handelOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {option.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handelOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </span>
              </div>
              <div className="headerSerchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <button className="headerButton">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
