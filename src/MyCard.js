import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaGenderless } from "react-icons/fa"

const MyCard = ({ details }) => {
    return (
        <Card>
            <CardBody className="text-center">
                <img
                    height="150"
                    width="150"
                    className="rounded-circle img-thumbnail border-warning"
                    src={details.picture?.large}
                />

                <CardTitle>

                    <CardText>
                        <h4 className="text-success">{details.name?.title} {details.name?.first} {details.name?.last}</h4>
                    </CardText>

                    <CardText >
                        <p>
                            <h6>Gender: {details.gender}</h6> 
                        </p>

                        <p><FaEnvelope /> &nbsp; &nbsp;
                            {details.email}
                        </p>

                        <p><FaMapMarkedAlt /> &nbsp; &nbsp;
                            {details.location?.city} , &nbsp;
                            {details.location?.state}, &nbsp;
                            {details.location?.country}, &nbsp;
                            {details.location?.postcode}
                        </p>

                        <p>
                            <FaPhone /> &nbsp; &nbsp;
                            {details.phone}
                        </p>

                    </CardText>
                </CardTitle>
            </CardBody>
        </Card>
    )
}

export default MyCard;