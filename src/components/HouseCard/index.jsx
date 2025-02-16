import { Container, Content, Details, Divider, Icons, Img } from "./style";
import noimg from "../../assets/img/noimg.jpg";

export const HouseCard = ({ url, title, bed, bath, car, ruler, info }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || 'Quincy St, Brooklyn, NY, USA'}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info"> Beds {bed ?? 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info"> Baths {bath ?? 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info"> Garage {car ?? 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info"> Ruler {ruler ?? 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content $footer>
      <Details.Item $footer>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item row="true">
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
