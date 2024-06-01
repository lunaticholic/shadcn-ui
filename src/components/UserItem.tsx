'use client';

export default function UserItem() {
    return <div className="flex items-center justify-center gap-2 border rounded-[8px] p-2">
        <div className="avatar rounded-full  h-12 w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            BJ
        </div>
        <div>
            <p className="text-[16px] font-bold">Byungjin Choi</p>
            <p className="text[12px] text-neutral-500">chrisholic11@gmail.com</p>
        </div>
    </div>
}