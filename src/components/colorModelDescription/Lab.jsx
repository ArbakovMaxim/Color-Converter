import {
  SpanColor,
  SpanH,
  SpanRgb,
  TextCode,
  TextColorModelDescription,
  WrapperColorModelDescription,
  WrapperHTMLlDescription,
  ListСlue,
  WrapperListСlue,
  TextСlue,
} from './ColorModel.styled';

const Lab = () => {
  return (
    <WrapperColorModelDescription>
      <TextColorModelDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsa!
        Molestias impedit dolores facilis id, ullam distinctio neque eum,
        reiciendis dolore quos officia aperiam odit delectus amet exercitationem
        sapiente! Et.
        <br />
        Эта модель популярна в фотографии, телевидении, и компьютерной графике.
        <br />
        <br />
        Значения RGBA задаются целым числом от 0 до 255.
        <br />
        Например, rgb(0,0,255).
        <br />
        отображается как синий, так как синий параметр установлен в его самое
        высокое значение (255), а остальные установлены в 0.
        <br />
        Некоторые приложения (в частности веб-браузеры) поддерживают процентную
        запись значений RGB (от 0% до 100%).
      </TextColorModelDescription>
      <WrapperHTMLlDescription>
        <TextCode>
          <SpanH>h1 </SpanH>
          {`{`}
          <SpanColor> color:</SpanColor>
          <SpanRgb>rgb(255, 0, 0); </SpanRgb>
          {`     }`}
          {` /*  красный  */`}
        </TextCode>
        <TextCode>
          <SpanH>h2 </SpanH>
          {`{`}
          <SpanColor> color:</SpanColor>
          <SpanRgb>rgb(0, 255, 0); </SpanRgb>
          {`     }`}
          {` /*  зелёный  */`}
        </TextCode>
        <TextCode>
          <SpanH>h3 </SpanH>
          {`{`}
          <SpanColor> color:</SpanColor>
          <SpanRgb> color: rgb(0, 0, 255); </SpanRgb>
          {`     }`}
          {` /*  синий  */`}
        </TextCode>
        <TextCode>
          <SpanH>h4 </SpanH>
          {`{`}
          <SpanColor> color:</SpanColor>
          <SpanRgb>rgb(0%, 0%, 100%); </SpanRgb>
          {`     }`}
          {` /*  тот же синий, процентная запись  */`}
        </TextCode>
      </WrapperHTMLlDescription>
      <WrapperListСlue>
        <TextСlue>Как преобразовать цветовой код RGB</TextСlue>
        <ListСlue>
          <li>
            Выберите в палитре, введите или вставьте из буфера обмена RGBA цвет.
          </li>
          <li>
            Вы сразу же получите значение цвета в нужном цветовом формате.
          </li>
          <li>Нажмите кнопку «Copy», чтобы скопировать результат.</li>
        </ListСlue>
      </WrapperListСlue>
    </WrapperColorModelDescription>
  );
};

export default Lab;
