import React, { useState, useEffect } from "react";
import {Badge, Col, Row} from "react-bootstrap";

const Timer = ({ onTimerExpired }) => {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [timerExpired, setTimerExpired] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prevSeconds) => prevSeconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes((prevMinutes) => prevMinutes - 1);
                    setSeconds(59);
                } else {
                    clearInterval(timer);
                    setTimerExpired(true);
                    onTimerExpired();
                }
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [minutes, seconds, onTimerExpired]);

    return (
        <Row>
          <Col>
            <h3> <Badge bg="secondary">Time:  {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")} </Badge></h3>
          </Col>
        </Row>
    );
};

export default Timer;
