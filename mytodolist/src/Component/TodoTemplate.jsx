import React, {useState} from "react";

    const TodoTemplate = () => {
        const users = ([{id: 0, title: "", body: "", isDone: false}])
        return (
            <div className="WorkingLineClass">
                <div className="DoneLineClass">
                    Done...!
                    {/*    조건문을 통해 어떤 컴포넌트를 불러올지 만들어야함*/}
                    <div className="app-style">
                        {
                            users.filter(function (users) {
                            return users =! undefined;
                                }).map(function(item){
                                    return  (
                                    <>
                                    <div className="TitleStyle" key={item.id}>{item.title}</div>
                                        <div className="bodyStyle" key={item.id}>{item.body}</div>
                                    </>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }
export default TodoTemplate;