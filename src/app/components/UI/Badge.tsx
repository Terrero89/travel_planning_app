import React from 'react'
import Avatar from './Avatar'
import BadgeItem from './BadgeItem'

interface Props { }

const Badge = () => {
    return (<div>
        <BadgeItem content="5" color="primary">
            <Avatar
                radius="md"
                size="lg"
                src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
            />
        </BadgeItem>
    </div>)

    export default Badge;