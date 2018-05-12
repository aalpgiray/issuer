import * as React from 'react';
import { Container, Segment } from "semantic-ui-react";

export default () => <Container text={true}>
    <Segment inverted={true}>
        <div id="Inner">
            <h1>Lorem Ipsum</h1>
            <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
            <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
            <hr />

            <div id="Content">
                <div className="boxed">
                    <div id="lipsum">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat lacus iaculis purus convallis, non sagittis tellus malesuada. Fusce luctus lobortis sem ac lacinia. Maecenas vitae magna sed diam venenatis dictum sit amet nec quam. Donec aliquet vitae dolor non lobortis. Aliquam vitae accumsan est. Donec commodo venenatis nunc, ut pharetra enim gravida in. Nunc risus tortor, aliquam at rutrum eu, cursus eu eros. Sed gravida congue quam, id condimentum nunc dictum sodales. Pellentesque quis sem eu turpis congue tempus congue id tellus. Nam vel finibus magna. Curabitur commodo porttitor venenatis.
                        </p>
                        <p>
                            Mauris ut laoreet ante. Curabitur et nunc interdum, tempor est ac, venenatis nisi. Nulla finibus mi ut velit tristique, vitae porta metus ornare. Vivamus ipsum risus, placerat non turpis non, sodales lobortis turpis. Nulla non lectus et sem finibus sodales. Nulla facilisi. Pellentesque eros lectus, lobortis sit amet ligula et, congue euismod ex. Quisque molestie urna ac leo malesuada, vitae efficitur lectus ornare. Donec ut neque at sapien porta eleifend id vel eros. Duis lobortis, tellus id egestas convallis, leo sem placerat mauris, quis fringilla leo lectus ut purus.
                        </p>
                        <p>
                            Fusce finibus at libero quis volutpat. Praesent varius magna at ornare fermentum. In viverra ante lacus, ut eleifend est euismod id. Proin in lobortis ipsum. Aliquam posuere accumsan felis, vel consectetur eros rutrum vel. Integer neque enim, sagittis sed mi non, vehicula placerat est. Etiam eros nisl, commodo vel suscipit ut, dignissim sed turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                        <p>
                            Aliquam viverra erat eu velit aliquam dignissim. Mauris porttitor elementum egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi maximus nulla eget nunc dictum commodo. Nullam lobortis et tellus feugiat scelerisque. Morbi ut augue at neque aliquam eleifend at eu enim. Vestibulum luctus scelerisque dolor, a efficitur sem tempor eget. Vestibulum vestibulum vehicula felis, et sollicitudin eros tempor at. Aenean commodo pellentesque erat vel luctus. Phasellus semper sollicitudin orci quis commodo.
                        </p>
                        <p>
                            Cras ac varius sapien, tristique dapibus enim. Sed et arcu urna. Duis vitae ultrices urna. Nunc sit amet turpis tincidunt, egestas risus eu, ornare erat. Sed tempus nunc ut magna faucibus sodales. Pellentesque faucibus tincidunt interdum. Cras rhoncus nisl vel bibendum sodales. Etiam egestas eget est nec porttitor. Cras semper, est ac fringilla fringilla, tellus odio facilisis dui, rhoncus iaculis felis mauris vitae tellus. Nullam auctor lectus posuere neque elementum fringilla.
                        </p>
                    </div>
                    <div id="generated">Generated 5 paragraphs, 394 words, 2658 bytes of <a href="https://www.lipsum.com/" title="Lorem Ipsum">Lorem Ipsum</a></div>
                </div>
                <hr />
            </div>
        </div>
    </Segment>
</Container>