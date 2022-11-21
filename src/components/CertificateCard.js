import { Col } from "react-bootstrap";

export const CertificateCard=({imgUrl})=>{
    return (
        <Col size={12} sm={6} md={3}>
        <div className="c-imgbox">
          <img src={imgUrl} alt='CardImage'/>
        </div>
      </Col>
    )
}