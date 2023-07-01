import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

export default function SkeletonGameMatch({cards = 1}) {

    return (
        <div className="grid grid-cols-2 gap-2">
            {Array(cards).fill(0).map((key, index) => (
                <div key={index}>
                    <SkeletonTheme baseColor="#001C30" highlightColor="#F5F5F5">
                        <Skeleton height={45} borderRadius={0}/>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#E7B10A" highlightColor="#F5F5F5">
                        <Skeleton count={6} height={28} borderRadius={0}/>
                    </SkeletonTheme>
                </div>
            ))}

        </div>
    );
}